// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaRegNewspaper } from "react-icons/fa";

// const BlogList = () => {
//   const [articles, setArticles] = useState([]); // State for all articles
//   const navigate = useNavigate(); // Navigation hook
//   const BASE_URL = import.meta.env.VITE_API_URL || "/api"; // Use environment variable or proxy

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           `https://blogs-czqjb.ondigitalocean.app/api/articles/?populate=*`
//         );
//         setArticles(res.data.data);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchData();
//   }, [BASE_URL]);

//   return (
//     <div className="min-h-screen  md:px-10 p-4">
//       <div className="w-full h-72 mt-10 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-3xl shadow-lg">
//         <h1 className="md:text-5xl text-3xl mt-5 font-extrabold text-white tracking-wide drop-shadow-lg">
//           Discover Topics That Matter
//         </h1>
//         <p className="mt-4 md:text-lg text-sm text-white max-w-2xl px-4 leading-relaxed">
//           Explore expert tips, success stories, and the latest trends in
//           coworking to inspire your journey.
//         </p>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
//         {articles.map((article) => {
//           const {
//             documentId,
//             title,
//             publishedAt,
//             cover,
//             author,
//             reading_time,
//           } = article;

//           const coverImage = cover?.[0]?.url;
//           const authorName = author || "Unknown";

//           return (
//             <div
//               key={documentId}
//               onClick={() => navigate(`/blogs/${documentId}`)} // Navigate to article details
//               className="cursor-pointer rounded-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform"
//             >
//               {/* {coverImage ? (
//                 <img
//                   src={`https://blogs-czqjb.ondigitalocean.app/${coverImage}`}
//                   alt={title}
//                   className="w-full h-56 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
//                   No Image Available
//                 </div>
//               )} */}
//               <img
//                 src={`https://blogs-czqjb.ondigitalocean.app${article?.cover?.[0]?.url}`}
//                 alt={title || "Image"}
//                 loading="lazy"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-5">
//                 <h2 className="text-base  lg:text-base font-semibold text-gray-800  line-clamp-2 hover:text-blue-600 transition-colors">
//                   {title}
//                 </h2>

//                 <p className="text-xs sm:text-base text-gray-500 font-medium">
//                   Author: <span className="text-gray-800">{authorName}</span>
//                 </p>
//                 <div className="flex justify-between mt-2 ">
//                   <p className="text-sm sm:text-base text-gray-500 ">
//                     {" "}
//                     <span className="font-medium text-gray-600">
//                       {new Date(publishedAt).toLocaleDateString("en-US")}
//                     </span>
//                   </p>
//                   <p className="text-xs sm:text-base text-gray-500 font-medium">
//                     Read In:{" "}
//                     <span className="text-gray-800">{reading_time} Min</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";


const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL || "/api";
  const ARTICLES_PER_PAGE = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blogs-czqjb.ondigitalocean.app/api/articles/?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${ARTICLES_PER_PAGE}`
        );
        setArticles(res.data.data);
        setTotalPages(res.data.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, [BASE_URL, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen  mt-16">
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Explore Topics That Inspire
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Discover the latest trends, expert insights, and success stories to
          guide your coworking journey.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {articles.length > 0 && (
          <section className="mb-12">
            <div
              onClick={() => navigate(`/blogs/${articles[0].documentId}`)}
              className="cursor-pointer flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform 
              "
            >
              <img
                src={`https://blogs-czqjb.ondigitalocean.app${articles[0]?.cover?.[0]?.url}`}
                alt={articles[0]?.title || "Image"}
                className="w-full lg:w-1/2 h-64 object-cover"
              />
              <div className="p-6 lg:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {articles[0]?.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  Author:{" "}
                  <span className="font-medium text-gray-800">
                    {articles[0]?.author || "Unknown"}
                  </span>
                </p>
                <p className="text-gray-600 mb-2">
                  Published on{" "}
                  {new Date(articles[0]?.publishedAt).toLocaleDateString(
                    "en-US"
                  )}
                </p>
                <p className="text-gray-600 mb-4">
                  Reading Time:{" "}
                  <span className="font-medium text-gray-800">
                    {articles[0]?.reading_time || "N/A"} min
                  </span>
                </p>
                <p className="text-gray-700 line-clamp-3">
                  {articles[0]?.excerpt || "Read this article to learn more."}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <div
              key={article.documentId}
              onClick={() => navigate(`/blogs/${article.documentId}`)}
              className="cursor-pointer bg-white  rounded-lg overflow-hidden transition-transform "
            >
              <img
                src={`https://blogs-czqjb.ondigitalocean.app${article?.cover?.[0]?.url}`}
                alt={article.title || "Image"}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="">
                <p className="mt-2 text-gray-500 text-sm mb-2 flex gap-2 tracking-tighter">
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("en-US")}
                  </span>
                  <span>•</span>
                  <span>{article.reading_time || "N/A"} Min</span>
                </p>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-500">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Author:{" "}
                  <span className=" text-gray-800">
                    {article.author || "Unknown"}
                  </span>
                </p>
                <p className="text-sm text-gray-700 hover:text-blue-600  flex items-center gap-1">
                  {article.excerpt || "Read More"} <MdArrowOutward className="" />
                </p>
              </div>
            </div>
          ))}
        </section>

        <div className="flex justify-center mt-8">
          <button
            className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          <span className="px-4 py-2 mx-1 bg-gray-200 rounded text-gray-700">
            {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogList;