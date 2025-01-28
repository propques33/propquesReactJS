// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../contexts/AuthContext";

// const BlogForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const { user } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/blogs", {
//         title,
//         description: content,
//         authorId: user.id,
//       });
//       alert("Blog posted successfully");
//     } catch (error) {
//       alert("Error posting blog");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Write a Blog</h2>
//       <input
//         type="text"
//         placeholder="Blog Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Blog Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//       ></textarea>
//       <button type="submit">Post Blog</button>
//     </form>
//   );
// };

// export default BlogForm;


import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

import { Editor } from "@tinymce/tinymce-react";

const BlogForm = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", {
        title,
        description: content,
        coverImage,
        authorId: user.id,
      });
      alert("Blog created successfully");
      setTitle("");
      setContent("");
      setCoverImage("");
    } catch (error) {
      console.error("Error creating blog", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Cover Image URL"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         <Editor
  apiKey="0nri411g5a35or8rxvtcnni3x1ux91mncowwcouyx5xefoxz"
  value={content}
  init={{
    height: 300,
    menubar: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
    ],
    toolbar:
      "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | image | help",
    images_upload_url: "http://localhost:5000/api/upload", // Your backend image upload endpoint
    automatic_uploads: true,
    file_picker_types: "image",
    file_picker_callback: (callback, value, meta) => {
      if (meta.filetype === "image") {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.onchange = function () {
          const file = this.files[0];
          const reader = new FileReader();
          reader.onload = function () {
            callback(reader.result, { alt: file.name });
          };
          reader.readAsDataURL(file);
        };
        input.click();
      }
    },
  }}
  onEditorChange={handleEditorChange}
/>

          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
