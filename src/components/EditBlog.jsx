import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "./Editor";

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
    ampCompatibility: false,
    brokenLinkDetector: false,
    redirectManager: [{ from: "", to: "", type: "301" }],
    locationLandingPages: [],
    napFields: { name: "", address: "", phone: "" },
    schemaMarkup: [],
    faqBlock: [{ question: "", answer: "" }],
    category: "",
    workspaceType: "none",
    city: "",
  });

  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [coverImageProgress, setCoverImageProgress] = useState(0);
  const [newSchemaInput, setNewSchemaInput] = useState("");
  const [editingSchemaIndex, setEditingSchemaIndex] = useState(null);
  const [editingSchemaValue, setEditingSchemaValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`)
      .then((res) => {
        const data = res.data;
        setBlog({
          ...data,
          redirectManager: data.redirectManager || [{ from: "", to: "", type: "301" }],
          faqBlock: data.faqBlock?.length ? data.faqBlock : [{ question: "", answer: "" }],
          locationLandingPages: data.locationLandingPages || [],
          napFields: data.napFields || { name: "", address: "", phone: "" },
          schemaMarkup: data.schemaMarkup || [],
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes("napFields.")) {
      const field = name.split(".")[1];
      setBlog((prev) => ({
        ...prev,
        napFields: { ...prev.napFields, [field]: value },
      }));
    } else if (type === "checkbox") {
      setBlog((prev) => ({ ...prev, [name]: checked }));
    } else {
      setBlog((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFaqChange = (index, field, value) => {
    const updated = [...blog.faqBlock];
    updated[index][field] = value;
    setBlog((prev) => ({ ...prev, faqBlock: updated }));
  };

  const addFaq = () => {
    setBlog((prev) => ({
      ...prev,
      faqBlock: [...prev.faqBlock, { question: "", answer: "" }],
    }));
  };

  const removeFaq = (index) => {
    if (blog.faqBlock.length <= 1) return;
    const updated = blog.faqBlock.filter((_, i) => i !== index);
    setBlog((prev) => ({ ...prev, faqBlock: updated }));
  };

  const handleRedirectChange = (index, field, value) => {
    const updated = [...blog.redirectManager];
    updated[index][field] = value;
    setBlog((prev) => ({ ...prev, redirectManager: updated }));
  };

  const addSchemaMarkup = () => {
    try {
      const parsed = JSON.parse(newSchemaInput);
      setBlog((prev) => ({
        ...prev,
        schemaMarkup: [...prev.schemaMarkup, JSON.stringify(parsed)],
      }));
      setNewSchemaInput("");
    } catch {
      alert("Invalid JSON");
    }
  };

  const removeSchemaMarkup = (index) => {
    const updated = blog.schemaMarkup.filter((_, i) => i !== index);
    setBlog((prev) => ({ ...prev, schemaMarkup: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`,
        { ...blog, contentBody: editorContent }
      );
      alert("✅ Blog updated successfully!");
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("❌ Failed to update blog.");
    }
  };

  if (loading) return <p>Loading blog...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="pageTitle" value={blog.pageTitle} onChange={handleChange} className="w-full p-2 border" placeholder="Page Title" />
        <input name="metaTitle" value={blog.metaTitle} onChange={handleChange} className="w-full p-2 border" placeholder="Meta Title" />
        <textarea name="metaDescription" value={blog.metaDescription} onChange={handleChange} className="w-full p-2 border" placeholder="Meta Description" />
        <input name="canonicalUrl" value={blog.canonicalUrl} onChange={handleChange} className="w-full p-2 border" placeholder="Canonical URL" />

        <select
          name="category"
          value={blog.category}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        >
          <option value="" selected>Select Category</option>
          <option value="Workspace Guides">Workspace Guides</option>
          <option value="Neighborhood Watch">Neighborhood Watch</option>
          <option value="Workspace Hacks">Workspace Hacks</option>
          <option value="Future of Work">Future of Work</option>
          <option value="Insider Insights">Insider Insights</option>
          <option value="NextMovein Updates">NextMovein Updates</option>
          <option value="Space Essentials">Space Essentials</option>
          <option value="Asset Playbook or Leasing Intelligence">Asset Playbook or Leasing Intelligence</option>
          <option value="The Deal Room">The Deal Room</option>
          <option value="Space Market Pulse">Space Market Pulse</option>
          <option value="Design Logic">Design Logic</option>
          <option value="The Living Office or Greenprint">The Living Office or Greenprint</option>
          <option value="PropTech Insights">PropTech Insights</option>
          <option value="Propques Labs">Propques Labs</option>
          <option value="Monetize & Manage">Monetize & Manage</option>
          <option value="PropTech & Analytics ">PropTech & Analytics </option>
        </select>

        <select
          name="workspaceType"
          value={blog.workspaceType}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        >
          <option value="">Select Workspace Type</option>
          <option value="none">None</option>
          <option value="day pass">Day Pass</option>
          <option value="private cabin">Private Cabin</option>
          <option value="meeting rooms">Meeting Rooms</option>
          <option value="dedicated desk">Dedicated Desk</option>
          <option value="managed office">Managed Office</option>
        </select>

        <input
          name="city"
          value={blog.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full p-2 border"
          required
        />

        <input type="file" onChange={handleCoverImageUpload} />
        {blog.featuredImage && <img src={blog.featuredImage} className="h-40 mt-2" alt="cover" />}

        <Editor value={editorContent} onChange={setEditorContent} />

        <h3 className="font-semibold">FAQs</h3>
        {blog.faqBlock.map((faq, i) => (
          <div key={i} className="space-y-2 border p-2">
            <input className="w-full p-2 border" value={faq.question} onChange={(e) => handleFaqChange(i, "question", e.target.value)} placeholder="Question" />
            <textarea className="w-full p-2 border" value={faq.answer} onChange={(e) => handleFaqChange(i, "answer", e.target.value)} placeholder="Answer" />
            <button type="button" onClick={() => removeFaq(i)} className="text-red-600 text-sm">Remove FAQ</button>
          </div>
        ))}
        <button type="button" onClick={addFaq} className="bg-gray-700 text-white px-3 py-1 rounded">+ Add FAQ</button>

        <h3 className="font-semibold">Schema Markup</h3>
        <textarea
          value={newSchemaInput}
          onChange={(e) => setNewSchemaInput(e.target.value)}
          className="w-full p-2 border"
        />
        <button type="button" onClick={addSchemaMarkup} className="bg-blue-600 text-white px-3 py-1 rounded">+ Add</button>
        <ul className="text-sm">
          {blog.schemaMarkup.map((item, i) => (
            <li key={i} className="flex flex-col border p-2 mt-2">
              {editingSchemaIndex === i ? (
                <>
                  <textarea
                    className="w-full p-2 border mb-2"
                    value={editingSchemaValue}
                    onChange={(e) => setEditingSchemaValue(e.target.value)}
                    rows={6}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-green-600 text-white px-2 py-1 rounded"
                      onClick={() => {
                        // Validate JSON
                        try {
                          JSON.parse(editingSchemaValue);
                          const updated = [...blog.schemaMarkup];
                          updated[i] = editingSchemaValue;
                          setBlog((prev) => ({ ...prev, schemaMarkup: updated }));
                          setEditingSchemaIndex(null);
                          setEditingSchemaValue("");
                        } catch {
                          alert("Invalid JSON");
                        }
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setEditingSchemaIndex(null);
                        setEditingSchemaValue("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <pre className="whitespace-pre-wrap break-all bg-gray-100 p-2 rounded mb-2 text-xs max-h-40 overflow-auto">
                    {(() => { try { return JSON.stringify(JSON.parse(item), null, 2); } catch { return item; } })()}
                  </pre>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setEditingSchemaIndex(i);
                        setEditingSchemaValue(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => removeSchemaMarkup(i)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        <input name="napFields.name" value={blog.napFields.name} onChange={handleChange} className="w-full p-2 border" placeholder="Business Name" />
        <input name="napFields.address" value={blog.napFields.address} onChange={handleChange} className="w-full p-2 border" placeholder="Address" />
        <input name="napFields.phone" value={blog.napFields.phone} onChange={handleChange} className="w-full p-2 border" placeholder="Phone" />


    
        <select value={blog.publishOn} onChange={(e) => setBlog({ ...blog, publishOn: e.target.value })} className="w-full p-2 border">
          <option value="">Select Platform</option>
          <option value="Propques">Propques</option>
          <option value="Findurspace">Findurspace</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBlog;
