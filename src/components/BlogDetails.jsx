import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaUser, FaCalendarAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";

const BlogDetails = () => {
  const [article, setArticle] = useState(null); // State for the selected article
  const [relatedArticles, setRelatedArticles] = useState([]); // State for other articles
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL || "/api"; // Use environment variable or proxy

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(
          `https://blogs-czqjb.ondigitalocean.app/api/articles/${id}?populate=*`
        );
        setArticle(res.data.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blogs-czqjb.ondigitalocean.app/api/articles/?populate=*`
          
        );
        setRelatedArticles(res.data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();

    fetchArticle();
  }, [BASE_URL, id]);
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
  if (!article)
    return (
      <div className="text-center h-screen w-full flex items-center justify-center mt-16 text-gray-600 text-lg">
        Loading article...
      </div>
    );

  const { title, description, publishedAt, cover, author } = article;
  const coverImage = cover?.url;
  const authorName = author || "Unknown";

  return (
    <div className="min-h-screen  md:px-6 px-0 lg:p-12 flex flex-col items-center justify-center lg:flex-row gap-10">
      {/* Blog Content */}
      <div className="flex-1 max-w-4xl  bg-white  rounded-lg overflow-hidden">
        {/* Back Button */}
        {/* <button
          onClick={() => navigate("/")}
          className="text-blue-600 hover:text-blue-800 flex items-center mb-4 transition-transform transform hover:-translate-x-1 p-4"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Articles</span>
        </button> */}

        {/* Cover Image */}

        <div className="relative w-full h-[450px] bg-slate-950">
          {/* Background Image */}
          <img
            src={`https://blogs-czqjb.ondigitalocean.app${article?.cover?.[0]?.url}`}
            alt={title || "Image"}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Title */}
          <h1 className="absolute bottom-6 left-6 text-3xl lg:text-5xl font-bold text-white shadow-lg drop-shadow-lg">
            {title}
          </h1>
        </div>

        {/* <h1 className=" bg-red-800">{console.log(article.cover[0].url)}</h1> */}

        {/* Content Section */}
        <div className="md:p-6 p-4 lg:p-0 lg:mt-2">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <FaUser className="mr-2 text-blue-500" />
            <span className="mr-4 font-medium text-gray-700">{authorName}</span>
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <span>
              {new Date(publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <CiTimer className="ml-4 mr-2 text-blue-500 flex" /> Read In{" "}
            <h2 className="text-end ml-2 ">{article?.reading_time} Mins</h2>
          </div>

          {/* Article Content */}
          <div className="leading-relaxed space-y-6 text-lg text-gray-800">
            {description?.map((block, index) => {
              switch (block.type) {
                case "heading":
                  const HeadingTag = `h${block.level}`; // Dynamically choose the heading tag
                  return (
                    <HeadingTag
                      key={index}
                      className={`${
                        block.level === 1
                          ? "text-4xl font-extrabold "
                          : block.level === 2
                          ? "text-2xl font-semibold text-gray-800"
                          : "text-xl font-medium text-gray-700"
                      }`}
                    >
                      {block.children.map((child) => child.text).join(" ")}
                    </HeadingTag>
                  );
                case "paragraph":
                  return (
                    <p key={index} className="text-gray-700">
                      {block.children.map((child, i) =>
                        child.type === "text" ? (
                          <span
                            key={i}
                            className={`${child.bold ? "super-bold font-extrabold" : ""} ${
                              child.italic ? "italic" : ""
                            } ${child.underline ? "underline" : ""} ` }
                          >
                            {child.text}
                          </span>
                        ) : child.type === "link" ? (
                          <a
                            key={i}
                            href={child.url}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.children
                              .map((linkChild) => linkChild.text)
                              .join(" ")}
                          </a>
                        ) : null
                      )}
                    </p>
                  );
                case "image": // New case to handle images
                  return (
                    <div key={index} className="my-4">
                      <img
                        src={`${block.image.url}`}
                        alt={block.alt || "Article image"}
                        className="w-full h-auto object-contain rounded-lg"
                        loading="lazy"
                      />
                      {block.caption && (
                        <p className="text-sm text-gray-500 mt-2 text-center">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                case "list":
                  return block.format === "unordered" ? (
                    <ul key={index} className="list-disc pl-6">
                      {block.children.map((item, i) => (
                        <li key={i}>
                          {item.children.map((child) => child.text).join(" ")}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ol key={index} className="list-decimal pl-6">
                      {block.children.map((item, i) => (
                        <li key={i}>
                          {item.children.map((child) => child.text).join(" ")}
                        </li>
                      ))}
                    </ol>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>

      {/* Sidebar for Related Articles */}
      {/* <div className="w-full lg:w-1/3 mt-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Related Articles
        </h2>
        <div className="space-y-4">
          {relatedArticles.map((article) => {
            const { documentId, title, publishedAt, cover, author } = article;
            const coverImage = cover?.url;
            const authorName = author || "Unknown";

            return (
              <div
                key={documentId}
                onClick={() => navigate(`/blogs/${documentId}`)} // Navigate to article details
                className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden flex items-center gap-4 p-4"
              >
               
                <img
                  src={`https://blogs-czqjb.ondigitalocean.app${relatedArticles[0]?.cover?.url}`}
                  alt={title || "Image"}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                {console.log(relatedArticles)}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-600">Author: {authorName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetails;
