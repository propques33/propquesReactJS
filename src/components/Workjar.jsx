import React, { useEffect } from "react";
import workjar1 from "../../public/workv1.png"; // Replace with actual image paths
import workjar2 from "../../public/workv2.png"; // Replace with actual image paths

const WorkJarCaseStudy = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="overflow-hidden md:px-16 px-4 ">
      {/* Overview Section */}
      <section className="container mx-auto mt-20">
        <div className="py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">Work Jar</h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                An underperforming standalone building was refurbished into a
                promising managed office space.
              </h2>
              <p className="text-gray-700 mb-6">
                Increased revenue with over 90% office occupancy through
                innovative solutions and recreational facilities.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Download Case Study
              </button>
            </div>

            <div className="md:w-1/2 flex items-center justify-center relative">
              <div className="relative">
                <img
                  src={workjar1}
                  alt="Work Jar Image 1"
                  className="rounded-lg shadow-md w-[80%] h-auto absolute top-0 left-0 transform translate-x-40 translate-y-20"
                  loading="lazy"
                />
                <img
                  src={workjar2}
                  alt="Work Jar Image 2"
                  className="rounded-lg shadow-md w-[80%] h-auto relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">90%</h3>
            <p className="text-gray-600">Office Occupancy</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">75-80/sqft</h3>
            <p className="text-gray-600">
              Increased rental value compared to 35-40/sqft
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          About Work Jar
        </h2>
        <p className="text-gray-600 mb-8">
          Growth in the rental income of workspaces by almost 75%. Increased
          60-70% occupancy rate throughout the year and continuous cash flow.
          Complete strategic makeover to increase leads, revenue generation, and
          proper visibility.
        </p>
      </section>

      {/* Problem Identification Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Identifying the Problem
          </h2>
          <p className="text-gray-600 mb-4">
            Mr. Rishabh Sanghvi had a low-profile standalone G+2 building near
            Indore’s most significant commercial hub, Brilliant Campus. The
            adjacent corporate hub housed offices of well-reputed companies.
          </p>
          <p className="text-gray-600 mb-4">
            The first challenge was the low visibility of the building, making
            it tough to market as a prominent space. This led to a lack of
            credible clients and revenue.
          </p>
          <p className="text-gray-600 mb-4">
            The second challenge was maintaining higher building occupancy and
            quality maintenance. Lower occupancy resulted in the building’s
            deterioration, reducing its rental value.
          </p>
          <p className="text-gray-600">
            Lastly, the proximity of a well-established corporate park made it
            challenging to attract clients, as corporates found the park more
            lucrative for offices.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Designing a Solution
        </h2>
        <p className="text-gray-600 mb-4">
          After thorough research, Propques suggested rebranding the building
          with a new name and converting it into a privately managed office.
          Renovation of all floors was proposed to enhance the building’s
          appeal.
        </p>
        <p className="text-gray-600 mb-4">
          To counter low occupancy, we targeted Indore-based enterprises,
          startups, freelancers, and growing local companies instead of large
          corporates. By addressing their need for an office with advanced
          facilities, we created a better office solution and community.
        </p>
        <p className="text-gray-600">
          A recreational zone on the terrace, including yoga and zumba classes
          and a cafeteria, was added to attract the local community and clients.
        </p>
      </section>

      {/* Positive Results Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Positive End Result
          </h2>
          <p className="text-gray-600 mb-4">
            Within six months of opening in October 2020, the building achieved
            full occupancy. Clients included freelancers, startups, and local
            companies.
          </p>
          <p className="text-gray-600 mb-4">
            The space now has more than 90% occupancy and generates revenue of
            75-80rs per sqft, significantly higher than the market rate of
            35-40rs per sqft.
          </p>
          <p className="text-gray-600">
            Work Jar has established itself as a reputed office space with a
            thriving community and high client retention.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkJarCaseStudy;
