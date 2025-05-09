import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Pencil, Globe , Trash2} from "lucide-react";

const AdminBlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs");
        setBlogs(res.data.pages || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleVisibility = async (slug, currentVisible) => {
    try {
      const updated = await axios.put(`https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`, {
        visible: !currentVisible,
      });

      setBlogs((prev) =>
        prev.map((b) =>
          b.urlSlug === slug ? { ...b, visible: updated.data.page.visible } : b
        )
      );
    } catch (err) {
      console.error("Error toggling visibility:", err);
      alert("Could not update visibility");
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm("Really delete this blog?")) return;
    try {
      await axios.delete(
        `https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs/${slug}`
      );
      setBlogs(prev => prev.filter(b => b.urlSlug !== slug));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Could not delete blog");
    }
  };
  

  const handleEdit = (slug) => {
    navigate(`/admin/edit/${slug}`);
  };

  const groupedBlogs = {
    Propques: blogs.filter((b) => b.publishOn === "Propques"),
    Findurspace: blogs.filter((b) => b.publishOn === "Findurspace"),
    Others: blogs.filter((b) => !b.publishOn),
  };

  const renderSection = (title, blogs) => (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <Globe className="w-5 h-5" /> {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            {blog.featuredImage && (
              <img
                src={blog.featuredImage}
                alt={blog.pageTitle}
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <h4 className="text-lg font-semibold truncate">{blog.pageTitle}</h4>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {blog.metaDescription}
            </p>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleEdit(blog.urlSlug)}
                className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                <Pencil className="w-4 h-4" />
                
              </button>

              <button
                onClick={() => toggleVisibility(blog.urlSlug, blog.visible)}
                className={`flex items-center gap-1 text-sm px-3 py-1 rounded ${
                  blog.visible
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-400 text-white hover:bg-gray-500"
                }`}
              >
                {blog.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                {blog.visible ? "Visible" : "Hidden"}
              </button>

              <button
  onClick={() => handleDelete(blog.urlSlug)}
  className="flex items-center gap-1 text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
>
  <Trash2 className="w-4 h-4" />
  
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) return <p className="p-6">Loading blogs...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8">🛠 Admin Blog Dashboard</h2>

      {renderSection(" Propques Blogs", groupedBlogs.Propques)}
      {renderSection(" Findurspace Blogs", groupedBlogs.Findurspace)}
      {renderSection(" Other Blogs", groupedBlogs.Others)}
    </div>
  );
};

export default AdminBlogDashboard;
