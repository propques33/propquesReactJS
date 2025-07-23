import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editorStyles.css";
import ImageResize from "quill-image-resize-module-react";

// Register the image resize module
Quill.register("modules/imageResize", ImageResize);

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
    }
  };

  const formats = [
    "header", "bold", "italic", "underline", "blockquote",
    "list", "bullet", "link", "image",
    "align"
  ];

  return (
    <div className="editor-scroll-wrapper">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="bg-white rounded border custom-quill-editor"
        placeholder="Start writing your blog here..."
      />
    </div>
  );
};

export default Editor;
