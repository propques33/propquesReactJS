import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SwithenIntro from "./SwithenIntro";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Ensure scrolling to the top of the document when the component is mounted
      window.scrollTo({
        top: 0,
        behavior: "auto", // You can use "auto" for instant scroll
      });
  
      // As a fallback, scroll the root element
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axios.get(
          `https://propques-backend-jsqqh.ondigitalocean.app/api/blogs/${id}`
        );
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to fetch blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const getRelatedBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://propques-backend-jsqqh.ondigitalocean.app/api/blogs"
        );

        if (data.blogs) {
          // Extract only visible blogs
          const visibleBlogs = data.blogs.filter((b) => b.visibility === true);
          // Remove current blog from related ones & limit to 4
          const filteredBlogs = visibleBlogs
            .filter((b) => b._id !== id)
            .slice(0, 4);
          setRelatedBlogs(filteredBlogs);
        }
      } catch (err) {
        console.error("Error fetching related blogs:", err);
      }
    };

    getBlog();
    getRelatedBlogs();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (loading)
    return <p className="text-gray-500 text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 pt-20">
      {/* Cover Image */}
      {blog.coverImage && (
        <div className="mb-6">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      )}

      {/* Blog Title */}
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900 poppins">
        {blog.title}
      </h1>

      {/* Blog Metadata */}
      <div className="text-md text-gray-600 mb-4 flex items-center space-x-4 poppins">
        <span>🕒 {blog.readingTime} read</span>
        <span className="font-semibold">By {blog.authors[0].name}</span>
      </div>

      {/* Blog Content */}
      <div
        className="prose prose-lg prose-blue max-w-none poppins leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
<hr />
      {/* Author Section */}
      <SwithenIntro />

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <div className="mt-12 poppins">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((related) => (
              <Link
                key={related._id}
                to={`/blog/${related.slug}`}
                className="block bg-white rounded-lg  overflow-hidden hover:shadow-xl "
              >
                <img
                  src={related.coverImage || "https://via.placeholder.com/400"}
                  alt={related.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {related.title.split(" ").length > 5
                      ? related.title.split(" ").slice(0, 5).join(" ") + "..."
                      : related.title}
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 mt-1">
                      {related.readingTime} read
                    </p>
                    <span className="text-sm text-gray-600 mt-1 ">
                      By {blog.authors[0].name}
                    </span>
                  </div>
                </div>
                <p className="bg-blue-500 rounded text-white text-center py-2">
                  Read More
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
