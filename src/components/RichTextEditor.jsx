import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";


import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaImage,
  FaLink,
  FaUnlink,
  FaTextHeight,
} from "react-icons/fa";

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      Image.configure({ inline: false }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const insertImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch("https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/upload-image", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        editor.chain().focus().setImage({ src: data.url }).run();
      } catch (err) {
        console.error("Image upload failed", err);
      }
    };
  };

  if (!editor) return null;

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition"
          title="Bold"
        >
          <FaBold />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition"
          title="Italic"
        >
          <FaItalic />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition"
          title="Underline"
        >
          <FaUnderline />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setFontSize("18px").run()}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition flex items-center gap-1"
          title="Font 18px"
        >
          <FaTextHeight /> 18
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setFontSize("24px").run()}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition flex items-center gap-1"
          title="Font 24px"
        >
          <FaTextHeight /> 24
        </button>

        <button
          type="button"
          onClick={insertImage}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition"
          title="Insert Image"
        >
          <FaImage />
        </button>

        <button
          type="button"
          onClick={() => {
            const url = prompt("Enter a URL:");
            if (url) {
              editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
            }
          }}
          className="p-2 border rounded bg-gray-100 hover:bg-indigo-100 transition"
          title="Add Link"
        >
          <FaLink />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="p-2 border rounded bg-gray-100 hover:bg-red-100 transition"
          title="Remove Link"
        >
          <FaUnlink />
        </button>


        <button
  type="button"
  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
  className="p-2 border rounded bg-gray-100 hover:bg-indigo-100"
  title="Heading 2"
>
  H2
</button>

<button
  type="button"
  onClick={() => editor.chain().focus().toggleBulletList().run()}
  className="p-2 border rounded bg-gray-100 hover:bg-indigo-100"
  title="Bullet List"
>
  • List
</button>

<button
  type="button"
  onClick={() => editor.chain().focus().toggleOrderedList().run()}
  className="p-2 border rounded bg-gray-100 hover:bg-indigo-100"
  title="Number List"
>
  1. List
</button>

<button
  type="button"
  onClick={() => editor.chain().focus().toggleBlockquote().run()}
  className="p-2 border rounded bg-gray-100 hover:bg-indigo-100"
  title="Blockquote"
>
  “
</button>

      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="border p-4 rounded bg-white min-h-[200px] overflow-scroll"
      />
    </div>
  );
};

export default RichTextEditor;
