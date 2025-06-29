import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CalendarDays, ChevronDown, ChevronUp, User } from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import DOMPurify from "dompurify"; // Optional but recommended for extra sanitization

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`
        );
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs?publishOn=Propques"
        );

        setAllBlogs(res.data.pages || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blog, slug]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Clean up <li> styling manually once HTML is rendered
  useEffect(() => {
    const cleanupListTags = () => {
      const container = document.querySelector("#blog-content");
      if (container) {
        const lis = container.querySelectorAll("li");
        lis.forEach((li) => {
          li.style.listStyle = "none";
          li.style.margin = "0";
          li.style.padding = "0";
        });
      }
    };
    cleanupListTags();
  }, [blog]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog)
    return <p className="text-center mt-10 text-red-500">Blog not found</p>;

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
          className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold leading-tight mb-4 text-gray-900">
        {blog.pageTitle}
      </h1>

      {/* Date + Author */}
      <div className="flex items-center gap-6 text-gray-600 text-sm mb-8 border-b pb-4">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          <span>{format(new Date(blog.createdAt), "dd MMM yyyy")}</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={18} />
          <span className="font-medium">Adarsh Mohan Dixit</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-body text-base md:text-lg leading-relaxed text-gray-800 space-y-6">
        {parse(DOMPurify.sanitize(blog.contentBody))}
      </div>

      {/* FAQ Section */}
      {blog.faqBlock?.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-5">FAQs</h2>
          {blog.faqBlock.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-lg p-5 mb-4 transition-all duration-300 ease-in-out shadow-sm ${
                openFaqIndex === i
                  ? "bg-white shadow-md"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => toggleFaq(i)}
            >
              <div className="flex justify-between items-center text-lg font-semibold">
                <p>{faq.question}</p>
                {openFaqIndex === i ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              <div
                className={`mt-3 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                  openFaqIndex === i
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <div className="mt-4">
        {allBlogs.length > 0 && (
          <div className="mt-20">
            {console.log(allBlogs)}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Suggested Blogs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allBlogs.slice(0, 3).map((item) => (
                <a
                  key={item._id}
                  href={`/blog/${item.urlSlug}`}
                  className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white"
                >
                  <img
                    src={item.featuredImage}
                    alt={item.pageTitle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {item.pageTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {item.metaDescription?.slice(0, 80)}...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default BlogDetails;
