// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const EditBlog = () => {
//   const { slug } = useParams(); // Get the slug from the URL
//   const navigate = useNavigate();

//   const [blog, setBlog] = useState({
//     title: "",
//     description: "",
//     coverImage: "",
//     authors: [],
//     readingTime: "",
//     visibility: true,
//   });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch blog details
//   useEffect(() => {
//     axios
//       .get(`https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${slug}`)
//       .then((res) => {
//         setBlog(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching blog:", err);
//         setError("Failed to load blog.");
//         setLoading(false);
//       });
//   }, [slug]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlog({ ...blog, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${slug}`, blog);
//       alert("Blog updated successfully!");
//       navigate(`/blog/${slug}`); // Redirect to the updated blog
//     } catch (err) {
//       console.error("Error updating blog:", err);
//       alert("Failed to update the blog.");
//     }
//   };

//   if (loading) return <p>Loading blog...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-semibold">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={blog.title}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Description</label>
//           <textarea
//             name="description"
//             value={blog.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Cover Image URL</label>
//           <input
//             type="text"
//             name="coverImage"
//             value={blog.coverImage}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Reading Time (mins)</label>
//           <input
//             type="text"
//             name="readingTime"
//             value={blog.readingTime}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Visibility</label>
//           <select
//             name="visibility"
//             value={blog.visibility}
//             onChange={(e) =>
//               setBlog({ ...blog, visibility: e.target.value === "true" })
//             }
//             className="w-full p-2 border rounded"
//           >
//             <option value="true">Visible</option>
//             <option value="false">Hidden</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Update Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBlog;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditBlog = () => {
  const { slug } = useParams(); // Get the blog slug from the URL
  const navigate = useNavigate();

  // Blog state
  const [blog, setBlog] = useState({
    title: "",
    coverImage: "",
    description: "",
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [coverImageProgress, setCoverImageProgress] = useState(0);

  // Fetch blog details
  useEffect(() => {
    axios
      .get(
        `https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${slug}`
      )
      .then((res) => {
        const blogData = res.data;

        // Set the blog state
        setBlog({
          title: blogData.title,
          coverImage: blogData.coverImage,
          description: blogData.description,
        });

        // Convert HTML to Draft.js editor state
        const blocksFromHtml = htmlToDraft(blogData.description);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        setEditorState(EditorState.createWithContent(contentState));

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog.");
        setLoading(false);
      });
  }, [slug]);

  /**
   * 📌 Handle Cover Image Upload
   */
  const handleCoverImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const result = await uploadImage(file, setCoverImageProgress);
      if (result) setBlog({ ...blog, coverImage: result.data.link });
    }
  };

  /**
   * 📌 Handle Content Image Upload
   */
  const handleContentImageUpload = async (file) => {
    return await uploadImage(file, setUploadProgress);
  };

  /**
   * 📌 Generic Image Upload Function with Progress Tracking
   */
  const uploadImage = async (file, setProgress) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setProgress(0);

      const { data } = await axios.post(
        "https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            let percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      setProgress(100);
      setTimeout(() => setProgress(0), 1500);

      return { data: { link: data.url } }; // Required by Draft.js
    } catch (error) {
      console.error("Image Upload Failed:", error);
      setProgress(0);
      return null;
    }
  };

  /**
   * 📌 Handle Blog Update
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    try {
      await axios.put(`https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${slug}`, {
        title: blog.title,
        description: content,
        coverImage: blog.coverImage,
      });

      alert("Blog updated successfully!");
      navigate(`/blog/${slug}`);
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("Failed to update the blog.");
    }
  };

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title */}
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Cover Image Upload */}
        <div>
          <label className="block font-semibold">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageUpload}
            className="block w-full p-2 border rounded"
          />
          {blog.coverImage && (
            <img
              src={blog.coverImage}
              alt="Cover"
              className="w-full h-40 object-cover mt-2 rounded-lg"
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
        </div>

        {/* Rich Text Editor */}
        <div className="border border-gray-300 rounded-lg p-2 bg-white ">
          <Editor
            editorState={editorState}
            onEditorStateChange={(newState) => setEditorState(newState)}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "list",
                "link",
                "image",
                "history",
              ],
              inline: { options: ["bold", "italic", "underline"] },
              blockType: { options: ["Normal", "H1", "H2", "H3"] },
              list: { options: ["unordered", "ordered"] },
              image: {
                uploadCallback: handleContentImageUpload,
                previewImage: true,
                alt: { present: true, mandatory: false },
              },
            }}
            editorClassName="custom-editor"
          />
        </div>

        {/* Content Image Upload Progress */}
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-lg mt-2">
            <div
              className="h-2 bg-blue-500 rounded-lg transition-all"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          💾 Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
