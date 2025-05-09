import React, { useEffect } from "react";
import wdo from "../../public/wdo.jpg";
import { Helmet } from "react-helmet";
const WorkDesqCaseStudy = () => {
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
        <title>WorkDesq: Flexible Workspaces in Indore</title>
        <meta
          name="description"
          content="WorkDesq by Propques provides flexible and modern coworking spaces in Indore."
        />
        <link rel="canonical" href="https://propques.com/case-study/workdesq" />
      </Helmet>

      {/* Overview Section */}
      <section className="container mx-auto mt-20 md:mt-0 lg:mt-0">
        <div className="py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">
                WorkDesq Indore – Transforming Pharma-Owned Real Estate into a
                Thriving Coworking Hub
              </h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                Unlocking Potential in Emerging Markets
              </h2>
              <p className="text-gray-700 mb-6">
                Discover how WorkDesq turned an underutilized property in
                Mahalaxmi Nagar into a modern coworking facility, generating
                consistent revenue and building a vibrant professional
                community.
              </p>
              <a href="https://www.workdesq.com/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Visit Website
                </button>
              </a>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src={wdo}
                alt="WorkDesq Transformation"
                className="rounded-lg shadow-md w-[80%] h-[10%]"
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
            The owners of WorkDesq, with extensive experience in the
            pharmaceutical industry, faced a challenge in repurposing their
            underutilized property in Mahalaxmi Nagar, Indore. Despite the prime
            location, the property remained unoccupied, generating no income and
            incurring maintenance costs.
          </p>
          <p className="text-gray-600 mb-4">
            The objective was to transform the space into a coworking hub that
            could attract local professionals, startups, and businesses, while
            delivering consistent revenue and enhancing the asset’s long-term
            value.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          The Solution
        </h2>
        <p className="text-gray-600 mb-4">
          WorkDesq partnered with workspace consultants to convert the property
          into a modern coworking facility tailored to the needs of Mahalaxmi
          Nagar’s emerging business ecosystem. Key steps included:
        </p>
        <ul className="list-disc ml-8 text-gray-600 mb-4">
          <li>
            Conducting strategic market analysis to identify Mahalaxmi Nagar as
            a promising location for coworking spaces.
          </li>
          <li>
            Reimagining the property as a 5,000 sq. ft. coworking space with
            open desks, private cabins, meeting rooms, collaborative zones, and
            a cafeteria.
          </li>
          <li>
            Equipping the facility with high-speed internet, uninterrupted power
            supply, and secure access systems.
          </li>
          <li>
            Introducing flexible membership options, including hourly, daily,
            and monthly plans, to cater to diverse user needs.
          </li>
          <li>
            Launching a targeted marketing campaign and organizing
            community-building activities such as workshops and networking
            events.
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
              <strong>12% Occupancy in Year 1:</strong> Achieved a steady 12%
              occupancy rate within the first year, building a loyal base of
              professionals and startups.
            </li>
            <li>
              <strong>Revenue Growth:</strong> Generated ₹120 per sq. ft. for
              the owners, significantly outperforming expectations for the area.
            </li>
            <li>
              <strong>Community Recognition:</strong> Established WorkDesq as a
              recognized coworking brand in Mahalaxmi Nagar.
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
          WorkDesq showcased the potential of transforming idle assets into
          sustainable revenue-generating spaces, even in emerging markets like
          Mahalaxmi Nagar. The project not only addressed the immediate
          challenge of monetizing the property but also created a foundation for
          long-term growth and community development.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Future Plans:</strong> Buoyed by the success of the Mahalaxmi
          Nagar facility, WorkDesq’s owners are exploring opportunities to
          expand their coworking brand to other micro-markets in Indore and
          beyond, leveraging their pharmaceutical industry connections to foster
          unique collaborations within their coworking spaces.
        </p>
      </section>
    </div>
  );
};

export default WorkDesqCaseStudy;
