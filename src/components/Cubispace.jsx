import React, { useEffect } from "react";
import cubii1 from "../../public/cubii1.jpg";
import cubii2 from "../../public/cubii2.jpg";
const Cubispace = () => {
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
      {/* Overview Section */}
      <section className="container  mx-auto mt-20">
        <div className="  py-12 rounded-lg w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">Cubispace</h1>
              <h2 className="text-5xl font-semibold mb-4 text-gray-900">
                Growth in the rental income of workspaces by almost 75%.
              </h2>
              <p className="text-gray-700 mb-6">
                Innovative & research-backed facelift of a strategically located
                commercial space into a well-facilitated hybrid office to tap
                the nearby home office needs.
              </p>
              <a href="https://www.cubispace.com/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Visit Website
                </button>
              </a>
            </div>

            <div className="md:w-1/2 flex items-center justify-center relative">
              <div className="relative">
                <img
                  src={cubii1}
                  alt="Work Vistar Image 1"
                  className="rounded-lg shadow-md w-[80%] h-auto absolute top-0 left-0 transform translate-x-40 translate-y-40"
                  loading="lazy"
                />
                <img
                  src={cubii2}
                  alt="Work Vistar Image 2"
                  className="rounded-lg shadow-md w-[80%] h-auto relative z-10"
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
          About Cubispace
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
            JSV is a renowned automobile group in Lucknow, with showrooms of
            Jaguar, Audi, and Hyundai, all at premium locations. Mr. Jatin, the
            owner of JSV group, met us with concern in his mind;
            under-utilization of his commercial properties.
          </p>
          <p className="text-gray-600 mb-4">
            All the automobile showrooms of the group had well-furnished
            standalone buildings. But, the concern arose because the IInd floor
            needed to generate more revenue. At the property, the ground floor
            is for showroom use; the basement & Ist floor is mostly used for an
            office. But, IInd floor was more like a revenue-eating burden, which
            needed to be monetized better & was a stressed asset for the owner.
          </p>

          {/* <div className="mt-4 flex justify-center">
            <FaClipboardCheck className="text-4xl text-blue-500" />
          </div> */}
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto pb-12 ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Designing a Solution
        </h2>
        <p className="text-gray-600 mb-4">
          Propques’s experienced staff started putting together their minds to
          analyze the concern & to come up with a promising solution. We did
          proper research to find out that all JSV showrooms were in strategic
          locations, on the main road & near residential colonies.
        </p>
        <p className="text-gray-600 mb-4">
          Moreover, we know that after the COVID & lockdown, corporate is
          searching for nearby home offices. Especially the companies with HOs
          in metro cities are looking for micro offices on a hybrid model for
          their remote team. Flexible offices that are near residential areas
          were thumbs up for them.
        </p>
        <p className="text-gray-600">
          Everything was strategically developed in meeting rooms, training
          rooms, manager cabins, conference rooms, boutique offices & open
          seats. We also noticed the growing demand for day & night shifts in
          micro offices. Therefore, we considered it in our plan & developed the
          property for 24-Hour operations. It required a successful
          transformation of building facilities & features.
        </p>
      </section>

      {/* Positive Results Section */}
      <section className="   py-12 ">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Positive End Result
          </h2>
          <p className="text-gray-600 mb-4">
            The center’s inauguration in March 2022 was a special moment; we
            witnessed the successful results of our efforts. Our analysis of
            adding the flexibility of day & night shifts in our co-working was a
            great revenue booster. By Dec 2022, the center occupancy passed the
            mark of 90%. And, the previous showroom building that expected per
            sqft rental of 30-40rs now saw a sharp rise to 88-93rs.
          </p>
          <p className="text-gray-600 mb-4">
            Promising results encouraged the owner, Mr. Jatin, to further expand
            his vision & earning. And he planned to absorb his other showroom
            buildings to this high-earning concept. Our expert team has started
            working on his vision by formulating an even more refined
            application of this revenue-generating concept.
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

export default Cubispace;
