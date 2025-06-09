import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogsData = () => {
  const API_URL = "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs"; // Backend API URL
  const [blogs, setBlogs] = useState([]); // State for blogs
  const [error, setError] = useState(null); // State for errors
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URL);
      setBlogs(response.data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(); // Call the fetch function when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mt-60 bg-red-600 h-screen w-full">Blogs</h1>
       
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsData;
