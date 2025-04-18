import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RichTextEditor from "./RichTextEditor";

const EditBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    pageTitle: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    featuredImage: "",
    visible: true,
    publishOn: "",
  });

  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [coverImageProgress, setCoverImageProgress] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`)
      .then((res) => {
        const data = res.data;
        setBlog({
          pageTitle: data.pageTitle,
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          canonicalUrl: data.canonicalUrl || "",
          featuredImage: data.featuredImage || "",
          visible: data.visible,
          publishOn: data.publishOn || "",
        });
        setEditorContent(data.contentBody || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [slug]);

  const uploadImage = async (file, setProgress) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      setProgress?.(0);
      const { data } = await axios.post(
        "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (e) => {
            if (setProgress) {
              setProgress(Math.round((e.loaded * 100) / e.total));
            }
          },
        }
      );
      setProgress?.(100);
      setTimeout(() => setProgress?.(0), 1000);
      return data.url;
    } catch (err) {
      console.error("Image upload failed", err);
      return null;
    }
  };

  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadImage(file, setCoverImageProgress);
      if (url) setBlog((prev) => ({ ...prev, featuredImage: url }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contentBody = editorContent;

    try {
      await axios.put(`https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`, {
        ...blog,
        contentBody,
      });

      alert("✅ Blog updated successfully!");
      navigate("/blogs");
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("❌ Failed to update blog.");
    }
  };

  if (loading) return <p>Loading blog...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Page Title"
          value={blog.pageTitle}
          onChange={(e) => setBlog({ ...blog, pageTitle: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Meta Title"
          value={blog.metaTitle}
          onChange={(e) => setBlog({ ...blog, metaTitle: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Meta Description"
          value={blog.metaDescription}
          onChange={(e) =>
            setBlog({ ...blog, metaDescription: e.target.value })
          }
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Canonical URL"
          value={blog.canonicalUrl}
          onChange={(e) => setBlog({ ...blog, canonicalUrl: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={blog.visible}
            onChange={(e) => setBlog({ ...blog, visible: e.target.checked })}
          />
          <span>Visible on UI</span>
        </label>

        <input type="file" onChange={handleCoverImageUpload} />
        {blog.featuredImage && (
          <img
            src={blog.featuredImage}
            alt="Cover"
            className="h-40 mt-2 rounded"
          />
        )}
        {coverImageProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-lg mt-2">
            <div
              className="h-2 bg-green-500 rounded-lg transition-all"
              style={{ width: `${coverImageProgress}%` }}
            ></div>
          </div>
        )}

        {/* 📝 React Quill Editor */}
        <RichTextEditor content={editorContent} onChange={setEditorContent}/>


        <label className="block font-semibold">Publish On</label>
        <select
          value={blog.publishOn || ""}
          onChange={(e) => setBlog({ ...blog, publishOn: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Platform</option>
          <option value="Propques">Propques</option>
          <option value="Findurspace">Findurspace</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
