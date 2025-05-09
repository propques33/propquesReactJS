  import React, { useEffect } from "react";
  import workv1 from "../../public/workv1.png";
  import workv2 from "../../public/workv2.png";
  import { Helmet } from "react-helmet";
  const WorkVistarCaseStudy = () => {
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
    return (
      <div className="overflow-hidden md:px-16 px-4 ">
         <Helmet>
        <title>Work Vistar: Dynamic Coworking Spaces in India</title>
        <meta
          name="description"
          content="Experience Work Vistar by Propques, providing dynamic coworking environments across India."
        />
        <link rel="canonical" href="https://propques.com/case-study/work-vistar" />
      </Helmet>
        {/* Overview Section */}
        <section className="container  mx-auto mt-20">
          <div className="  py-12 rounded-lg w-full mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center ">
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800">
                Work Vistar Coworking
                </h1>
                <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                  Growth in the rental income of workspaces by almost 75%.
                </h2>
                <p className="text-gray-700 mb-6">
                  Increased 60-70% occupancy rate throughout the year and
                  continuous cash flow. Complete strategic makeover to increase
                  leads, revenue generation, and proper visibility.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Download Case Study
                </button>
              </div>

              <div className="md:w-1/2 flex items-center justify-center relative">
                <div className="relative">
                  <img
                    src={workv1}
                    alt="Work Vistar Image 1"
                    className="rounded-lg shadow-md w-[80%] h-auto absolute top-0 left-0 transform translate-x-40 translate-y-20"
                    loading="lazy"
                  />
                  <img
                    src={workv2}
                    alt="Work Vistar Image 2"
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
              <h3 className="text-4xl font-bold text-blue-500">75%</h3>
              <p className="text-gray-600">
                Growth in the rental income of workspaces
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-500">60-70%</h3>
              <p className="text-gray-600">Occupancy rate throughout the year</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            About Work Vistar
          </h2>
          <p className="text-gray-600 mb-8">
            Growth in the rental income of workspaces by almost 75%. Increased
            60-70% occupancy rate throughout the year and continuous cash flow.
            Complete strategic makeover to increase leads, revenue generation, and
            proper visibility.
          </p>
        </section>

        {/* Problem Identification Section */}
        <section className=" py-12 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Identifying the Problem
            </h2>
            <p className="text-gray-600 mb-4">
              Investor Sanjay Agarwal started his journey of investing in many
              corporate parks and scaled his business. As an individual investor,
              he has a strong portfolio of corporate buildings in Indore. However,
              the traditional leasing methods brought several challenges. The
              changing scenarios of the corporate industry and the latest trends
              needed a solid strategy to scale the business.
            </p>
            <p className="text-gray-600 mb-4">
              The first problem faced by Sanjay Agarwal was irregular rental
              income due to the traditional ways of leasing properties. A lack of
              a proper management team resulted in the properties being not leased
              for more than six months. It resulted in zero rental income several
              times, affecting the business. It was a bigger challenge to maintain
              the rental income every month.
            </p>
            <p className="text-gray-600">
              The second hindrance in his way was the occupancy issue. It resulted
              in less rental income and low profitability. Due to improper
              management of the properties, they stayed un-leased for a longer
              period. It resulted in zero occupancy several times.
            </p>
            {/* <div className="mt-4 flex justify-center">
              <FaClipboardCheck className="text-4xl text-blue-500" />
            </div> */}
          </div>
        </section>

        {/* Solution Section */}
        <section className="container mx-auto py-12 ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Designing a Solution
          </h2>
          <p className="text-gray-600 mb-4">
            The low rental income and less occupancy issue were raised by Sanjay
            Agarwal to the experts at Propques. The solution to these issues was
            on boarding a team to manage the properties. Marketing with the help
            of banners was also taken into consideration. The Propques team
            designed and implemented a solution for the rental income and
            occupancy issue.
          </p>
          <p className="text-gray-600 mb-4">
            We understood a lack of a team to handle the properties. The firm
            suggested starting privately managed workspaces. Work Vistar was a
            result of this solution, and its first centre was established in the
            Zodiac Mall in Indore.
          </p>
          <p className="text-gray-600">
            Moving ahead, we ideated to create amenities like a well-equipped
            pantry, reception, and photocopy services. Coworking spaces often
            struggle with high overhead costs. It includes rent, maintenance, and
            utilities. We implemented a flexible pricing model and efficient space
            utilization strategies to nullify this problem.
          </p>
        </section>

        {/* Positive Results Section */}
        <section className=" py-12 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Positive End Result
            </h2>
            <p className="text-gray-600 mb-4">
              The strategies proposed by Propques made Work Vistar a profitable
              organization. Due to our strategic approach and full-fledged support
              from our client, Work Vistar witnessed tremendous growth in their
              rental income.
            </p>
            <p className="text-gray-600 mb-4">
              Huge companies like OYO and MediBuddy established their office in
              the Work Vistar center. Both completed tenure of 1.5 years. Along
              with it, our strategy helped reduce rental irregularities by
              maintaining proper management with the clients. No workspace has
              been unleased for more than six months.
            </p>
            <p className="text-gray-600">
              Work Vistar experienced 60-70% growth in their occupancy rate
              throughout the year. Additionally, Work Vistar is able to create a
              strong community, retain clients, and build a positive reputation to
              attract new clients.
            </p>
          </div>
        </section>

        {/* Download Section */}
        {/* <section className="container mx-auto py-12 px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Download Detailed Case Study</h2>
          <div className="flex justify-center mb-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="border rounded-md p-2 w-1/3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company name"
              className="border rounded-md p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Download</button>
        </section> */}
      </div>
    );
  };

  export default WorkVistarCaseStudy;
