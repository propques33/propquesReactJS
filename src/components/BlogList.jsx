import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaRegCalendarAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://propques-backend-jsqqh.ondigitalocean.app/api/blogs"
      );
      console.log(response.data.blogs);
      setBlogs(response.data.blogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = async (blogId, currentVisibility) => {
    const newVisibility = !currentVisibility;
    const token = localStorage.getItem("token");

    console.log(
      `Toggling visibility for Blog ID: ${blogId} to ${newVisibility}`
    );

    try {
      const response = await axios.patch(
        `https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${blogId}/visibility`,
        { visibility: newVisibility },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Updated Blog Data:", response.data);
      fetchBlogs();
    } catch (error) {
      console.error(
        "Error toggling visibility:",
        error.response?.data || error
      );
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
            <p className="ml-3 text-gray-600">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className={`p-5 rounded-lg shadow-md transition ${
                  !blog.visibility ? "opacity-50" : "opacity-100"
                } bg-gray-50 hover:bg-gray-100`}
              >
                {console.log(blog)}
                {/* Blog Image */}
                <img
                  src={blog.coverImage || "https://via.placeholder.com/300"}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Blog Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mt-1">
                    {blog.description.length > 100
                      ? blog.description.substring(0, 100) + "..."
                      : blog.description}
                  </p> */}

                  {/* Date & Visibility Info */}
                  <div className="flex items-center text-gray-600 mt-2 text-sm">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  {/* <div className="mt-2 flex items-center">
                    {blog.visibility ? (
                      <FaEye className="text-green-500 mr-2" />
                    ) : (
                      <FaEyeSlash className="text-red-500 mr-2" />
                    )}
                    <span className="text-sm">
                      {blog.visibility ? "Visible" : "Hidden"}
                    </span>
                  </div> */}
                </div>

                {/* Visibility Toggle Button */}
                <button
                  onClick={() => toggleVisibility(blog._id, blog.visibility)}
                  className={`w-full mt-4 px-4 py-2 text-sm font-medium rounded-lg transition flex items-center justify-center ${
                    blog.visibility
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {blog.visibility ? (
                    <FaEyeSlash className="mr-2" />
                  ) : (
                    <FaEye className="mr-2" />
                  )}
                  {blog.visibility ? "Hide" : "Show"}
                </button>

                {/* Edit Blog Button */}
                <button
                  onClick={() => navigate(`/edit-blog/${blog.slug}`)}
                  className="w-full mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition flex items-center justify-center"
                >
                  <FaEdit className="mr-2" />
                  Edit Blog
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
              alt="No data"
              className="w-32 h-32 opacity-50"
            />
            <p className="mt-4 text-lg font-medium">No blogs available.</p>
            <p className="text-sm">Check back later or add new blogs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
