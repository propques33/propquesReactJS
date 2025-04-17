import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.pageTitle}</h1>
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.pageTitle}
          className="w-full h-60 object-cover rounded mb-6"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.contentBody }}
      />

      {blog.faqBlock?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">FAQs</h2>
          {blog.faqBlock.map((faq, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium">{faq.question}</p>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
