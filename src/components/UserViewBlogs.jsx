import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserViewBlogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    axios
      .get("https://propques-backend-jsqqh.ondigitalocean.app/api/blogs")
      .then((res) => {
        const blogs = Array.isArray(res.data.blogs) ? res.data.blogs : [];
        const visibleBlogs = blogs
          .filter((blog) => blog.visibility === true)
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by latest
        setData(visibleBlogs);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold">Loading blogs...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="mx-auto pt-20 p-6">
      {/* Page Header */}
      <div className="relative w-full py-20 flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?coworking,office,workspace')",
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Coworking Space <span className="text-yellow-300">Insights</span>
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            Stay ahead with expert opinions, workspace trends, and industry
            news. Explore insights to optimize and grow your coworking business.
          </p>
        </div>
      </div>

      {/* Blog Layout */}
      {data.length === 0 ? (
        <p className="text-center text-lg">No blogs available.</p>
      ) : (
        <>
          {/* First Three Blogs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Latest Blog (Large) */}
            {data.length > 0 && (
              <div
                className="lg:col-span-2 bg-white rounded-xl overflow-hidden cursor-pointer transition relative"
                onClick={() => navigate(`/blog/${data[0].slug}`)}
              >
                <div className="relative">
                  <img
                    src={data[0].coverImage}
                    alt={data[0].title}
                    className="w-full h-[450px] object-cover rounded-lg"
                  />
                  <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-[#0000008c] to-transparent"></div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded">
                      FEATURED
                    </span>
                    <h2 className="text-3xl font-semibold text-white mt-2">
                      {data[0].title}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2">
                      {new Date(data[0].date).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next 2 Blogs (Smaller) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {data.slice(1, 3).map((item) => (
                <div
                  key={item._id}
                  className="relative bg-white rounded-xl overflow-hidden cursor-pointer transition"
                  onClick={() => navigate(`/blog/${item.slug}`)}
                >
                  <div className="relative">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                    <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-[#000000d3]  to-transparent"></div>
                    <div className="absolute bottom-4 left-4 z-10">
                      <h2 className="text-lg font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="text-xs text-gray-300 mt-1">
                        {new Date(item.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Blogs (Grid Layout) */}
          {data.length > 3 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">More Blogs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.slice(3).map((item) => (
                  <div
                    key={item._id}
                    className="relative bg-white rounded-xl overflow-hidden cursor-pointer transition"
                    onClick={() => navigate(`/blog/${item.slug}`)}
                  >
                    <div className="relative">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-[180px] object-cover rounded-lg"
                      />
                      <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-[#000000d3] to-transparent"></div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <h2 className="text-md font-semibold text-white">
                          {item.title}
                        </h2>
                        <p className="text-xs text-gray-300 mt-1">
                          {new Date(item.date).toDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserViewBlogs;
