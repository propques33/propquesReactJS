import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "./Editor";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import RichTextEditor from "./RichTextEditor";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    pageTitle: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    featuredImage: "",
    faqBlock: [{ question: "", answer: "" }],
    schemaMarkup: [],
    ampCompatibility: false,
    brokenLinkDetector: false,
    redirectManager: [{ from: "", to: "", type: "301" }],
    locationLandingPages: [],
    napFields: {
      name: "",
      address: "",
      phone: "",
    },
    category: "",
    workspaceType: "none",
    city: "",
  });
  const [editorContent, setEditorContent] = useState(""); // <-- ✅ Add this

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploading, setUploading] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [newSchemaInput, setNewSchemaInput] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // ===== Handlers =====

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes("napFields.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        napFields: {
          ...prev.napFields,
          [field]: value,
        },
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("image", file);
    setUploading(true);
    try {
      const res = await axios.post(
        "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/upload-image",
        data
      );
      setFormData((prev) => ({ ...prev, featuredImage: res.data.url }));
    } catch {
      alert("Image upload failed");
    }
    setUploading(false);
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqBlock];
    updatedFaqs[index][field] = value;
    setFormData({ ...formData, faqBlock: updatedFaqs });
  };

  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqBlock: [...prev.faqBlock, { question: "", answer: "" }],
    }));
  };

  const handleRedirectChange = (index, field, value) => {
    const updated = [...formData.redirectManager];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, redirectManager: updated }));
  };

  const removeFaq = (index) => {
    if (formData.faqBlock.length <= 1) {
      alert("At least one FAQ is required.");
      return;
    }
    const updatedFaqs = [...formData.faqBlock];
    updatedFaqs.splice(index, 1);
    setFormData((prev) => ({ ...prev, faqBlock: updatedFaqs }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const contentBody = editorContent;

    // Validate FAQ Block
    for (let i = 0; i < formData.faqBlock.length; i++) {
      const { question, answer } = formData.faqBlock[i];
      if (!question.trim() || !answer.trim()) {
        alert(
          `FAQ #${i + 1} is incomplete. Please fill both question and answer.`
        );
        setSubmitting(false);
        return;
      }
    }

    try {
      await axios.post(
        "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs",
        {
          ...formData,
          contentBody,
          publishOn: selectedPlatform,
        }
      );
      alert("Blog created successfully!");
    } catch (err) {
      console.error(err);
      alert(
        "Failed to create blog: " + err?.response?.data?.error ||
          "Unknown error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const addSchemaMarkup = () => {
    try {
      const parsed = JSON.parse(newSchemaInput);
      setFormData((prev) => ({
        ...prev,
        schemaMarkup: [...prev.schemaMarkup, JSON.stringify(parsed)],
      }));
      setNewSchemaInput("");
    } catch (err) {
      alert("Invalid JSON format. Please check and try again.");
    }
  };

  const removeSchemaMarkup = (index) => {
    const updated = [...formData.schemaMarkup];
    updated.splice(index, 1);
    setFormData({ ...formData, schemaMarkup: updated });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await axios.get(
          "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs",
          {
            params: selectedPlatform ? { publishOn: selectedPlatform } : {},
          }
        );
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, [selectedPlatform]);

  // ===== Render =====

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Create New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title & Meta Fields */}
        <input
          name="pageTitle"
          value={formData.pageTitle}
          onChange={handleInputChange}
          placeholder="Page Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="metaTitle"
          value={formData.metaTitle}
          onChange={handleInputChange}
          placeholder="Meta Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleInputChange}
          placeholder="Meta Description"
          className="w-full p-2 border rounded"
        />
        <input
          name="canonicalUrl"
          value={formData.canonicalUrl}
          onChange={handleInputChange}
          placeholder="Canonical URL"
          className="w-full p-2 border rounded"
        />
        {/* Category Dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
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

        {/* Workspace Type Dropdown */}
        <select
          name="workspaceType"
          value={formData.workspaceType}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="" selected>Select Workspace Type</option>
          <option value="none">None</option>
          <option value="day pass">Day Pass</option>
          <option value="private cabin">Private Cabin</option>
          <option value="meeting rooms">Meeting Rooms</option>
          <option value="dedicated desk">Dedicated Desk</option>
          <option value="managed office">Managed Office</option>
        </select>

        {/* City Input */}
        <input
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
          className="w-full p-2 border rounded"
          required
        />

        {/* Cover Image */}
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploading && <p>Uploading...</p>}
          {formData.featuredImage && (
            <img
              src={formData.featuredImage}
              alt="cover"
              className="w-full h-48 object-cover mt-2 rounded"
            />
          )}
        </div>

        {/* Rich Text Editor */}
        <Editor value={editorContent} onChange={setEditorContent} />

        {/* Schema Markup Paste Section */}
        <h3 className="font-semibold mt-4">Schema Markup (Paste JSON)</h3>
        <textarea
          value={newSchemaInput}
          onChange={(e) => setNewSchemaInput(e.target.value)}
          placeholder="Paste JSON-LD schema markup"
          className="w-full p-2 border rounded"
          rows={4}
        />
        <button
          type="button"
          onClick={addSchemaMarkup}
          className="bg-gray-700 text-white px-3 py-1 rounded mt-2"
        >
          + Add Schema
        </button>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
          {formData.schemaMarkup.map((schema, i) => (
            <li
              key={i}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>Schema #{i + 1}</span>
              <button
                type="button"
                onClick={() => removeSchemaMarkup(i)}
                className="text-red-600 text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {/* FAQ Section */}
        <h3 className="font-semibold">FAQs</h3>
        {formData.faqBlock.map((faq, index) => (
          <div key={index} className="space-y-2 mb-4 border p-3 rounded relative">
          <input
              type="text"
              placeholder="Question"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Answer"
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              className="w-full p-2 border rounded"
            />

            <button
              type="button"
              onClick={() => removeFaq(index)}
              className="absolut text-red-500 text-sm"
            >
              Remove FAQ 
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFaq}
          className="bg-gray-700 text-white px-3 py-1 rounded mb-4"
        >
          + Add FAQ
        </button>

        {/* Redirect Manager */}
        <h3 className="font-semibold">Redirect Manager</h3>
        {formData.redirectManager.map((redirect, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="/from"
              value={redirect.from}
              onChange={(e) => handleRedirectChange(i, "from", e.target.value)}
              className="p-2 border rounded w-1/3"
            />
            <input
              type="text"
              placeholder="/to"
              value={redirect.to}
              onChange={(e) => handleRedirectChange(i, "to", e.target.value)}
              className="p-2 border rounded w-1/3"
            />
            <select
              value={redirect.type}
              onChange={(e) => handleRedirectChange(i, "type", e.target.value)}
              className="p-2 border rounded w-1/3"
            >
              <option value="301">301</option>
              <option value="302">302</option>
              <option value="410">410</option>
            </select>
          </div>
        ))}

        {/* Location Landing Pages */}
        <input
          type="text"
          placeholder="Landing Locations (comma separated)"
          value={formData.locationLandingPages.join(",")}
          onChange={(e) =>
            setFormData({
              ...formData,
              locationLandingPages: e.target.value
                .split(",")
                .map((s) => s.trim()),
            })
          }
          className="w-full p-2 border rounded"
        />

        {/* NAP Fields */}
        <input
          type="text"
          name="napFields.name"
          value={formData.napFields.name}
          onChange={handleInputChange}
          placeholder="Business Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="napFields.address"
          value={formData.napFields.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="napFields.phone"
          value={formData.napFields.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />

        {/* Platform Selector */}
        <select
          className="border p-2 rounded mb-4"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="">All Platforms</option>
          <option value="Propques">Propques</option>
          <option value="Findurspace">Findurspace</option>
        </select>

        {/* Toggles */}
        <div className="flex gap-4">
          <label>
            <input
              type="checkbox"
              name="ampCompatibility"
              checked={formData.ampCompatibility}
              onChange={handleInputChange}
            />{" "}
            AMP Compatibility
          </label>
          <label>
            <input
              type="checkbox"
              name="brokenLinkDetector"
              checked={formData.brokenLinkDetector}
              onChange={handleInputChange}
            />{" "}
            Broken Link Detector
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={submitting}
        >
          {submitting ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
