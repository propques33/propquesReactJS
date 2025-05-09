import React from "react";

const projects = [
  {
    img: "https://your-image-url-1.jpg",
    title: "",
    subtitle: "",
  },
  {
    img: "https://your-image-url-2.jpg",
    title: "Premium Coworking Hub",
    subtitle: "Coworking",
  },
  {
    img: "https://your-image-url-3.jpg",
    title: "",
    subtitle: "",
  },
  {
    img: "https://your-image-url-4.jpg",
    title: "",
    subtitle: "",
  },
  {
    img: "https://your-image-url-5.jpg",
    title: "",
    subtitle: "",
  },
  {
    img: "https://your-image-url-6.jpg",
    title: "",
    subtitle: "",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Featured Projects in Lucknow
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Browse through some of our recent office interior design projects completed across Lucknow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((item, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
          <img
            src={item.img}
            alt={item.title || `Project ${i + 1}`}
            className="w-full h-60 object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
          />
          {item.title && (
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs uppercase text-gray-200">{item.subtitle}</p>
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
          )}
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
