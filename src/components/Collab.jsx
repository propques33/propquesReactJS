import React from "react";
import plogo from "../../public/plogo.webp";
import plogo2 from "../../public/plogo2.png";
import plogo3 from "../../public/plogo3.png";
import plogo5 from "../../public/plogo5.png";
import plogo6 from "../../public/plogo6.png";
import plogo7 from "../../public/plogo7.webp";

const Collab = () => {
  return (
    <div className="font-extraboldp">
      <section className="py-12 px-4 md:px-16">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 capitalize">
              Collaborators We've Worked With
              <span className="text-blue-500">.</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-700">
              Partnering with industry leaders, we've collaborated with top
              brands to transform spaces, create innovative solutions, and drive
              unparalleled growth in the commercial real estate sector.
            </p>
          </div>

          {/* Right Section - Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 justify-items-center w-full md:w-1/2">
            {[plogo, plogo2, plogo3, plogo5, plogo6, plogo7].map(
              (client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform"
                >
                  <img
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="md:w-32 w-24 h-auto"
                    loading="lazy"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collab;
