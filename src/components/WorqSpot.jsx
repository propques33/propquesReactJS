import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const WorqSpotCaseStudy = () => {
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
       <Helmet>
        <title>WorqSpot: Premium Coworking Space in Navi Mumbai</title>
        <meta
          name="description"
          content="Explore WorqSpot by Propques, offering premium coworking spaces in Navi Mumbai."
        />
        <link rel="canonical" href="https://propques.com/case-study/worqspot" />
      </Helmet>
      {/* Overview Section */}
      <section className="container mx-auto mt-20 md:mt-0 lg:mt-0">
        <div className="py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">
              WorqSpot Navi Mumbai
              </h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                Unlocking the Potential of Premium Locations
              </h2>
              <p className="text-gray-700 mb-6">
                Learn how Inter-connected Enterprises Limited (ICEL) turned a
                6,000 sq. ft. vacant property into a thriving coworking space,
                achieving rapid occupancy and exponential revenue growth.
              </p>
              <a href="https://worqspot.com/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Visit Website
                </button>
              </a>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="https://worqspot.com/wp-content/uploads/2023/06/Asset-10-4.png"
                alt="WorqSpot Transformation"
                className="rounded-lg  w-[80%] h-auto"
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
            Inter-connected Enterprises Limited (ICEL), a leading name in
            India’s financial ecosystem, owned a premium 6,000 sq. ft. property
            located at the International Infotech Park atop Vashi Railway
            Station in Navi Mumbai. Despite its prime location, the space
            remained vacant, leading to underutilization of a high-potential
            asset.
          </p>
          <p className="text-gray-600 mb-4">
            The challenge was to transform the vacant space into a
            revenue-generating coworking hub that could attract modern
            professionals, startups, and corporate satellite offices.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          The Solution
        </h2>
        <p className="text-gray-600 mb-4">
          ICEL launched WorqSpot, a contemporary coworking brand designed to
          cater to the evolving needs of hybrid professionals and enterprises.
          The transformation strategy included:
        </p>
        <ul className="list-disc ml-8 text-gray-600 mb-4">
          <li>
            Leveraging the property’s prime location atop Vashi Railway Station
            for unmatched accessibility.
          </li>
          <li>
            Revamping the 6,000 sq. ft. area into a 123-seat coworking space
            with open workstations, private cabins, meeting rooms, lounge areas,
            and a cafeteria.
          </li>
          <li>
            Introducing modern interiors, ergonomic furniture, and high-speed
            internet to create a professional yet vibrant environment.
          </li>
          <li>
            Implementing a 24/7 operational model with facilities like advanced
            security, power backup, printing services, and a dedicated
            concierge.
          </li>
          <li>
            Running a targeted marketing campaign and hosting events like
            workshops and networking sessions to build a thriving coworking
            community.
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
              <strong>Rapid Occupancy Growth:</strong> Achieved 60% occupancy
              within three months of launch, with continued growth.
            </li>
            <li>
              <strong>Revenue Boost:</strong> Rental income grew from ₹50/sq.
              ft. to ₹80/sq. ft. under the coworking model.
            </li>
            <li>
              <strong>Community Engagement:</strong> Regular events and
              ICEL-supported training sessions positioned WorqSpot as a hub for
              innovation and collaboration.
            </li>
            <li>
              <strong>Enhanced Brand Value:</strong> ICEL’s reputation as an
              innovative enterprise was further solidified, paving the way for
              future coworking ventures.
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
          WorqSpot successfully addressed the underutilization of a premium
          property while tapping into Navi Mumbai’s growing demand for coworking
          spaces. This project demonstrated the potential of leveraging prime
          real estate and smart design to create sustainable, high-yielding
          assets.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Future Expansion:</strong> Encouraged by the success of
          WorqSpot, ICEL plans to replicate this model in other key markets,
          focusing on strategically located properties with high footfall and
          connectivity.
        </p>
      </section>
    </div>
  );
};

export default WorqSpotCaseStudy;
