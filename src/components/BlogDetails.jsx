import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CalendarDays, ChevronDown, ChevronUp, User } from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{blog.metaTitle || blog.pageTitle}</title>
        <meta
          name="description"
          content={
            blog.metaDescription ||
            blog.contentBody?.replace(/<[^>]+>/g, "").slice(0, 160)
          }
        />
        <meta name="author" content="Adarsh Mohan Dixit" />
        <link
          rel="canonical"
          href={blog.canonicalUrl || window.location.href}
        />
      </Helmet>

      {/* Blog Cover */}
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.pageTitle}
          className="w-full h-96 object-cover rounded mb-6"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{blog.pageTitle}</h1>

      {/* Date + Author */}
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
        <div className="flex items-center gap-1">
          <CalendarDays size={16} />
          <span>{format(new Date(blog.createdAt), "dd MMMM yyyy")}</span>
        </div>
        <div className="flex items-center gap-1">
          <User size={16} />
          <span>Adarsh Mohan Dixit</span>
        </div>
      </div>

      {/* Blog Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.contentBody }}
      />

      {/* FAQ Section */}
      {blog.faqBlock?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          {blog.faqBlock.map((faq, i) => (
            <div
              key={i}
              className="border rounded p-4 mb-3 cursor-pointer bg-gray-50"
              onClick={() => toggleFaq(i)}
            >
              <div className="flex justify-between items-center font-medium">
                <p>{faq.question}</p>
                {openFaqIndex === i ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>
              {openFaqIndex === i && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
