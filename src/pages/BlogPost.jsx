/* eslint-disable react/prop-types */
import React from "react";

const BlogPost = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Blog Posts
        {console.log(data)}
      </h1>

      {Array.isArray(data) &&
        data.map((blog, index) => (
          <div
            key={index}
            className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
          >
            {/* Blog Title */}
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              {blog.Title}
            </h2>

            {/* Blog Meta */}
            <p className="text-sm text-gray-500 mb-4">
              By{" "}
              <span className="font-medium text-gray-700">
                {blog.Author || "Unknown Author"}
              </span>{" "}
              | Published on {new Date(blog.Published).toLocaleDateString()}
            </p>

            <hr className="mb-4" />

            {/* Blog Content */}
            <div>
              {blog.Content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.children.map((child, childIndex) => (
                    <p
                      key={childIndex}
                      className={`text-gray-700 leading-relaxed ${
                        child.bold ? "font-semibold" : ""
                      }`}
                    >
                      {child.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogPost;
