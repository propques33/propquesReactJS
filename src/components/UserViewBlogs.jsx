import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs?publishOn=Propques");
        const visibleBlogs = res.data.pages?.filter(blog => blog.visible) || [];
        setBlogs(visibleBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading blogs...</p>;
  if (blogs.length === 0) return <p className="text-center mt-10 text-gray-500">No Propques blogs available.</p>;

  return (
    <>
      {/* 🟦 Blog Banner */}
      <div className="bg-gradient-to-r mt-12 from-blue-600 to-blue-600 text-white py-12 text-center rounded-b-3xl shadow-lg">
        <h1 className="md:text-4xl text-2xl font-bold mb-2">Propques Blog</h1>
        <p className="md:text-lg text-sm text-white/90">Insights, ideas & guides from India's coworking experts</p>
      </div>

      {/* 🟩 Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 md:py-12 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer flex flex-col"
            onClick={() => navigate(`/blog/${blog.urlSlug}`)}
          >
            {blog.featuredImage && (
              <img
                src={blog.featuredImage}
                alt={blog.pageTitle}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.pageTitle}</h3>
              <p className="text-gray-600 text-sm flex-grow">
                {blog.metaDescription?.slice(0, 110)}...
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium hover:underline">
                <span>Read More</span>
                <FaArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
