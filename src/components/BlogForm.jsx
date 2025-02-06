// import React, { useState, useRef } from "react";
// import axios from "axios";

// const BlogForm = () => {
//   const [title, setTitle] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [content, setContent] = useState(""); // HTML content
//   const [uploadProgress, setUploadProgress] = useState(0); // Progress Bar State
//   const editorRef = useRef(null);

//   /**
//    * 📌 Handle Image Upload to Cloudinary with Progress Bar
//    */
//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       setUploadProgress(0); // Reset progress

//       const { data } = await axios.post(
//         "http://localhost:5000/api/blogs/upload-image",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//           onUploadProgress: (progressEvent) => {
//             let percentCompleted = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setUploadProgress(percentCompleted);
//           },
//         }
//       );

//       setUploadProgress(100); // Ensure it completes

//       if (editorRef.current) {
//         const imgTag = `<p><img src="${data.url}" class="max-w-full h-auto" /></p>`;
//         editorRef.current.innerHTML += imgTag;
//         setContent(editorRef.current.innerHTML);
//       }

//       setTimeout(() => setUploadProgress(0), 1000); // Hide progress bar
//     } catch (error) {
//       console.error("Image Upload Failed:", error);
//       setUploadProgress(0); // Reset progress on failure
//     }
//   };

//   /**
//    * 📌 Handle Text Formatting (Bold, Italic, Underline, Lists, Headings, Links)
//    */
//   const applyFormatting = (command, value = null) => {
//     document.execCommand(command, false, value);
//     setContent(editorRef.current.innerHTML);
//   };

//   /**
//    * 📌 Handle Headings (H1, H2, H3) with Tailwind Classes
//    */
//   const applyHeading = (level) => {
//     document.execCommand("formatBlock", false, `<h${level}>`);
//     setContent(editorRef.current.innerHTML);
//   };

//   /**
//    * 📌 Handle Content Change (Ensures Real-time Updates)
//    */
//   const handleContentChange = () => {
//     setContent(editorRef.current.innerHTML);
//   };

//   /**
//    * 📌 Handle Blog Submission
//    */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/blogs", {
//         title,
//         description: content,
//         coverImage,
//         authorId: "6799c7cf845df102d171f728", // Replace with actual user ID
//       });

//       console.log("Blog Created:", response.data);
//       alert("Blog created successfully");

//       setTitle("");
//       setCoverImage("");
//       setContent("");
//       editorRef.current.innerHTML = ""; // Clear editor
//     } catch (error) {
//       console.error("Error creating blog:", error);
//       alert("Failed to create blog");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center p-6">
//       <div className="bg-white w-full max-w-4xl p-6 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           ✍️ Write Your Blog
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Blog Title */}
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Cover Image */}
//           <input
//             type="text"
//             placeholder="Cover Image URL"
//             value={coverImage}
//             onChange={(e) => setCoverImage(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Toolbar */}
//           <div className="flex flex-wrap space-x-2 mb-2 bg-gray-100 p-2 rounded-md">
//             {/* Text Styles */}
//             <button type="button" onClick={() => applyFormatting("bold")} className="p-2 font-bold border rounded">
//               B
//             </button>
//             <button type="button" onClick={() => applyFormatting("italic")} className="p-2 italic border rounded">
//               I
//             </button>
//             <button type="button" onClick={() => applyFormatting("underline")} className="p-2 underline border rounded">
//               U
//             </button>

//             {/* Headings */}
//             <button type="button" onClick={() => applyHeading(1)} className="p-2 border rounded">
//               H1
//             </button>
//             <button type="button" onClick={() => applyHeading(2)} className="p-2 border rounded">
//               H2
//             </button>
//             <button type="button" onClick={() => applyHeading(3)} className="p-2 border rounded">
//               H3
//             </button>

//             {/* Lists */}
//             <button type="button" onClick={() => applyFormatting("insertUnorderedList")} className="p-2 border rounded">
//               • List
//             </button>
//             <button type="button" onClick={() => applyFormatting("insertOrderedList")} className="p-2 border rounded">
//               1. List
//             </button>

//             {/* Link */}
//             <button
//               type="button"
//               onClick={() => {
//                 const url = prompt("Enter URL:");
//                 if (url) applyFormatting("createLink", url);
//               }}
//               className="p-2 border rounded"
//             >
//               🔗 Link
//             </button>

//             {/* Image Upload */}
//             <label className="p-2 border rounded cursor-pointer">
//               📷
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//             </label>
//           </div>

//           {/* Upload Progress Bar */}
//           {uploadProgress > 0 && (
//             <div className="w-full bg-gray-200 rounded-lg">
//               <div className="h-2 bg-blue-500 rounded-lg" style={{ width: `${uploadProgress}%` }}></div>
//             </div>
//           )}

//           {/* Editable Content Area */}
//           <div
//             ref={editorRef}
//             contentEditable
//             onInput={handleContentChange}
//             className="w-full h-60 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
//             style={{ minHeight: "150px", overflowY: "auto" }}
//           ></div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//             📝 Create Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BlogForm;






import React, { useState } from "react";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editorStyles.css"; // Import custom styles

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadProgress, setUploadProgress] = useState(0);
  const [coverImageProgress, setCoverImageProgress] = useState(0);

  /**
   * 📌 Handle Image Upload to Cloudinary (For Content Images)
   */
  const handleContentImageUpload = async (file) => {
    return await uploadImage(file, setUploadProgress);
  };

  /**
   * 📌 Handle Cover Image Upload (Uploads and Sets URL)
   */
  const handleCoverImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const result = await uploadImage(file, setCoverImageProgress);
      if (result) setCoverImage(result.data.link);
    }
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
   * 📌 Handle Blog Submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    try {
      const response = await axios.post(
        "https://propques-backend-jsqqh.ondigitalocean.app/api/blogs",
        {
          title,
          description: content,
          coverImage,
          authorId: "6799c7cf845df102d171f728",
        }
      );

      console.log("Blog Created:", response.data);
      alert("Blog created successfully");

      setTitle("");
      setCoverImage("");
      setEditorState(EditorState.createEmpty());
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white w-full  p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          ✍️ Write Your Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          {/* Blog Title */}
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Cover Image Upload */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Upload Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
            {/* Show uploaded cover image preview */}
            {coverImage && (
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-40 object-cover mt-2 rounded-lg"
              />
            )}
            {/* Cover Image Upload Progress */}
            {coverImageProgress > 0 && (
              <div className="w-full bg-gray-200 rounded-lg mt-2">
                <div
                  className="h-2 bg-green-500 rounded-lg transition-all"
                  style={{ width: `${coverImageProgress}%` }}
                ></div>
              </div>
            )}
          </div>

          {/* Editor with Custom Styles */}
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
                blockType: {
                  options: ["Normal", "H1", "H2", "H3"],
                },
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
            📝 Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
