import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);
  useEffect(() => {
  console.log("Updated Blogs State:", blogs);
}, [blogs]);

const fetchBlogs = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get("http://localhost:5000/api/blogs");
    console.log("API Response:", response); // Debugging
    console.log("Token", response.data.token); // Debug: Log the response

    setBlogs(response.data.blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    setError("Failed to load blogs. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const toggleVisibility = async (blogId, currentVisibility) => {
    try {
      await axios.patch(`http://localhost:5000/api/blogs/${blogId}/visibility`, {
        visibility: !currentVisibility,
      });
      fetchBlogs(); 
    } catch (error) {
      console.error("Error toggling visibility:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Blog List</h2>

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
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li
                key={blog._id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <div>
                  <p className="text-lg font-semibold">{blog.title}</p>
                  <p className="text-sm text-gray-500">
                    {blog.visibility ? "Visible" : "Hidden"}
                  </p>
                </div>
                <button
                  onClick={() => toggleVisibility(blog._id, blog.visibility)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    blog.visibility
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {blog.visibility ? "Hide" : "Show"}
                </button>
              </li>
            ))}
          </ul>
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


