import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const KaryasthalSpacesCaseStudy = () => {
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
  <title>Karyasthal: Professional Coworking Spaces in India</title>
  <meta
    name="description"
    content="Karyasthal by Propques offers professional coworking environments across India."
  />
  <link rel="canonical" href="https://propques.com/case-study/sapna-sangeeta-offices" />
</Helmet>

      {/* Overview Section */}
      <section className="container mx-auto mt-20">
        <div className="py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">
                Karyasthal Indore 
              </h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                Unlocking Potential in Bhawarkua, Indore
              </h2>
              <p className="text-gray-700 mb-6">
                Explore how Karyasthal Developers optimized underutilized floors
                into a thriving coworking space, driving significant revenue and
                community engagement.
              </p>
              <a href="https://www.karyasthal.com/home-moving/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Visit Website
                </button>
              </a>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="https://www.karyasthal.com/wp-content/uploads/2023/05/Asset-45.jpg"
                alt="Karyasthal Spaces Transformation"
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
            Karyasthal Developers, a prominent construction company based in
            Indore’s Bhawarkua area, faced a challenge in monetizing two
            underutilized floors in one of their commercial buildings. Despite
            their expertise in construction, the space remained vacant due to a
            lack of strategic vision.
          </p>
          <p className="text-gray-600 mb-4">
            The goal was to transform these vacant floors into a coworking hub
            that would generate consistent revenue and align with the emerging
            trends of flexible workspaces.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          The Solution
        </h2>
        <p className="text-gray-600 mb-4">
          Karyasthal Developers partnered with workspace consultants to launch
          Karyasthal Spaces, a coworking brand tailored to meet the needs of
          professionals and businesses in the Bhawarkua area. Key steps
          included:
        </p>
        <ul className="list-disc ml-8 text-gray-600 mb-4">
          <li>
            Conducting market research to identify Bhawarkua as a prime location
            for coworking spaces due to its proximity to colleges, startups, and
            small businesses.
          </li>
          <li>
            Transforming 8,000 sq. ft. of space into a modern coworking hub with
            open workstations, private cabins, meeting rooms, breakout zones,
            and a café.
          </li>
          <li>
            Equipping the space with high-speed internet, power backup, and
            secure access controls.
          </li>
          <li>
            Launching targeted marketing campaigns and organizing community
            events to foster collaboration among members.
          </li>
          <li>
            Offering flexible membership plans, including introductory
            discounts, to attract early adopters.
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
              <strong>90% Occupancy in 12 Months:</strong> Reached 60% occupancy
              within the first quarter and 90% by the end of the first year.
            </li>
            <li>
              <strong>Significant Revenue Growth:</strong> Monthly rental income
              increased by 80%, thanks to the coworking model’s premium pricing.
            </li>
            <li>
              <strong>Profitability in Year 1:</strong> Achieved breakeven and
              turned profitable within the first year.
            </li>
            <li>
              <strong>Brand Recognition:</strong> Established Karyasthal Spaces
              as a recognized coworking brand in Bhawarkua.
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
          The successful transformation of two vacant floors into a profitable
          coworking hub showcased Karyasthal Developers’ ability to adapt to
          market trends and diversify their real estate portfolio. The project
          not only maximized the utility of an existing asset but also
          contributed to the growth of the local business ecosystem.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Future Expansion:</strong> Encouraged by the success of
          Karyasthal Spaces, the developers are exploring opportunities to
          replicate the model in other locations, leveraging their construction
          expertise to create more coworking hubs.
        </p>
      </section>
    </div>
  );
};

export default KaryasthalSpacesCaseStudy;
