import React from "react";

const InsightsSection = () => {
  const insights = [
    {
      title: "MEET THE CEO & CO-FOUNDER: DAN ZAKAI OF MINDSPACE",
      description:
        "Hear from the CEO of Mindspace, Dan Zakai, as he discusses the biggest challenges faced by...",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      title: "MEET THE CEO: JUSTIN CHEN OF ARCC SPACES",
      description:
        "Hear from the CEO of Arcc Spaces, Justin Chen, on how the brand fully embraces the...",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      title: "MEET THE CO-FOUNDER: FRIDTJOF GUSTAVS OF MOTIONLAB.BERLIN",
      description:
        "In our latest interview, we chat to the co-founder of MotionLab.Berlin, Fridtjof Gustavs, about the coworking...",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      title:
        "MEET THE FOUNDERS OF TADAH, SWITZERLAND’S FIRST COWORKING SPACE WITH CHILDCARE",
      description:
        "From the outset, Tadah's mission has been to empower parents and give people the chance to...",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Insights from Coworking Space Operators
        </h2>
        <hr className="mx-auto w-16 border-t-2 border-gray-400 mb-8" />

        {/* Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
