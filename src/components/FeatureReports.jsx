import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedReports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: "csfosct51ja2du34xjhbqj58",
      title: "2025 Global Coworking Trends Report",
      description:
        "An in-depth analysis of the latest trends shaping the coworking industry in 2025, from hybrid work to sustainability...",
      type: "INDUSTRY INSIGHTS",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
    },
    {
      id: "csfosct51ja2du34xjhbqj59",
      title: "2025 Coworking Market Expansion Guide",
      description:
        "A comprehensive guide for entrepreneurs and asset owners looking to capitalize on coworking market opportunities in 2025...",
      type: "GUIDES",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
    },
    {
      id: "csfosct51ja2du34xjhbqj60",
      title: "2025 Hot Desk Pricing Report",
      description:
        "Discover the average hot desk pricing across major cities worldwide and what it means for coworking operators...",
      type: "PRICING REPORTS",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
    },
    {
      id: "csfosct51ja2du34xjhbqj61",
      title: "2025 Flexible Office Technology Trends",
      description:
        "A look at the cutting-edge technology trends redefining the flexible office and coworking space experiences in 2025...",
      type: "TECHNOLOGY REPORTS",
      image: "https://via.placeholder.com/300x200", // Replace with your actual image URL
    },
  ];

  const handleReportClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Featured Coworking News 2025
        </h2>
        <hr className="mx-auto w-16 border-t-2 border-gray-400 mb-8" />

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleReportClick(report.id)}
            >
              {/* Image */}
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{report.type}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedReports;
