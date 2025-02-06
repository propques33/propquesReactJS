import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserViewBlogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
    axios
      .get("https://propques-backend-jsqqh.ondigitalocean.app/api/blogs")
      // .get("https://blogs-propques.onrender.com/api/blogs")
      .then((res) => {
        const blogs = Array.isArray(res.data.blogs) ? res.data.blogs : [];
        const visibleBlogs = blogs.filter((blog) => blog.visibility === true); // Filter visible blogs
        setData(visibleBlogs);
        console.log(visibleBlogs);
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
      <div className="relative w-full py-16 flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-blue-400 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?reading,books,blogging')",
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl px-6 t">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Our <span className="">Knowledge Hub</span>
          </h1>
          <p className="mt-3 text-lg text-gray-100">
            Discover insightful articles, expert opinions, and inspiring
            stories. Expand your knowledge with our curated content.
          </p>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-lg">No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white  rounded-xl overflow-hidden p-4 border cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate(`/blog/${item.slug}`)}
            >
              {console.log(item)}
              {item.coverImage && (
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
              <div className="flex items-center text-gray-600 mt-2">
                <FaUser className="mr-2" />
                <p className="text-sm">
                  <strong>Author(s):</strong>{" "}
                  {item.authors.map((author) => author.name).join(", ") ||
                    "Unknown"}
                </p>
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <FaClock className="mr-2" />
                <p className="text-sm">
                  <strong>Reading Time:</strong> {item.readingTime || "Unknown"}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserViewBlogs;

// import React, { useEffect, useState } from "react";
// import { fetchBlogs } from "../services/api";
// import { Link } from "react-router-dom";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const getBlogs = async () => {
//       const data = await fetchBlogs(page);
//       setBlogs(data.blogs);
//       setTotalPages(data.pages);
//     };
//     getBlogs();
//   }, [page]);

//   return (
//     <div>
//       <h2>Blogs</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog._id}>
//             <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
//           </li>
//         ))}
//       </ul>
//       <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//         Prev
//       </button>
//       <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default BlogList;
