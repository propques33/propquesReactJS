import React, { useEffect } from "react";

const SapnaSangeetaCaseStudy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="overflow-hidden md:px-16 px-4">
      {/* Overview Section */}
      <section className="container mx-auto mt-20 md:mt-0 lg:pt-0">
        <div className="py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">
                Transforming Underutilized Spaces into Thriving Hybrid Offices
              </h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                Unlocking the Potential of Prime Locations
              </h2>
              <p className="text-gray-700 mb-6">
                Learn how Propques partnered with the Tolani Group to convert an
                underperforming commercial space into a high-demand coworking
                hub, achieving 100% occupancy within three months.
              </p>
              <a href="https://sapnasangeetaoffices.com/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Visit Website
                </button>
              </a>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="https://sapnasangeetaoffices.com/assets/meetingroom-D1esv36w.jpeg"
                alt="Sapna Sangeeta Transformation"
                className="rounded-lg shadow-md w-[80%] h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            The Challenge
          </h2>
          <p className="text-gray-600 mb-4">
            The Tolani Group, known for its legacy in Indore's film distribution
            and cinema industry, faced a challenge: the second floor of their
            iconic Sapna Sangeeta Cinema was underutilized and failing to
            generate sufficient returns.
          </p>
          <p className="text-gray-600 mb-4">
            Despite its prime location, the space was a financial burden. The
            family sought to transform this idle area into a revenue-generating
            asset.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          The Solution
        </h2>
        <p className="text-gray-600 mb-4">
          Recognizing the potential of the location and the growing demand for
          hybrid work environments, Propques partnered with the Tolani Group to
          reimagine the space. Key steps included:
        </p>
        <ul className="list-disc ml-8 text-gray-600 mb-4">
          <li>
            Conducting market research to identify the demand for flexible
            coworking spaces.
          </li>
          <li>
            Renovating the second floor into a 49-seat coworking facility with
            private offices, shared spaces, and meeting rooms.
          </li>
          <li>
            Introducing modern amenities, such as high-speed internet and
            ergonomic furniture.
          </li>
          <li>
            Creating a vibrant, professional ambiance to appeal to startups,
            freelancers, and satellite offices.
          </li>
          <li>
            Developing 24/7 operational capability to accommodate varying work
            schedules.
          </li>
        </ul>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            The Results
          </h2>
          <ul className="list-disc ml-8 text-gray-600 mb-4">
            <li>
              <strong>75% Increase in Rental Income:</strong> Rental rates rose
              from ₹40/sq. ft. to ₹88/sq. ft.
            </li>
            <li>
              <strong>Consistent Occupancy:</strong> A steady 90-100% occupancy
              rate has been maintained since launch.
            </li>
            <li>
              <strong>Enhanced Visibility:</strong> The coworking space became a
              community hub, elevating the Tolani Group's reputation.
            </li>
            <li>
              <strong>Strategic Expansion:</strong> Encouraged by the success,
              the Tolani Group is converting additional spaces into coworking
              facilities.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          The Impact
        </h2>
        <p className="text-gray-600 mb-4">
          This case highlights how strategic space optimization can unlock
          immense value in underperforming commercial properties. By aligning
          the project with market demands and leveraging their rich legacy, the
          Tolani Group not only achieved financial success but also contributed
          to Indore’s growing entrepreneurial ecosystem.
        </p>
      </section>
    </div>
  );
};

export default SapnaSangeetaCaseStudy;
