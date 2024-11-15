import React, { useEffect } from 'react';
import { FaUsers, FaLightbulb, FaRegCalendarAlt, FaCogs, FaHandshake, FaBuilding, FaComments } from 'react-icons/fa';
import { AiOutlineSolution, AiOutlineLineChart } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import partner from '../../public/partner.webp'
import plogo from '../../public/plogo.webp'
import plogo2 from '../../public/plogo2.png'
import plogo3 from '../../public/plogo3.png'
import plogo4 from '../../public/plogo4.png'
import plogo5 from '../../public/plogo5.png'
import plogo6 from '../../public/plogo6.png'
import plogo7 from '../../public/plogo7.webp'
import plogo8 from '../../public/plogo8.png'
import pImg from '../../public/pImg.jpg'
import Button from './Button'
const Partners = () => {
  
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
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="bg-cover mt-20 h-96 flex flex-col w-full items-center justify-center relative bg-center py-32 text-white text-center"
        style={{ backgroundImage: "url('../../public/partner.webp')" }}
      >
        <div className="absolute z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 z-20 ">
            Collaborating with Landlord Reps for effective partnerships.
          </h1>
          <p className="text-lg md:text-xl z-20 ">
            Assisting landlords in adapting to changing office markets.
          </p>
        </div>
        <div className="bg-black opacity-70 top-0 absolute w-full h-full z-10"></div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-8 md:px-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Do your clients face these current challenges too?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Lack of Flexible Workspaces",
              icon: (
                <FaBuilding className="text-6xl text-blue-500 mx-auto mb-4" />
              ),
            },
            {
              title: "Tenant experience software desired",
              icon: <FaCogs className="text-6xl text-blue-500 mx-auto mb-4" />,
            },
            {
              title: "Increased vacancy rates.",
              icon: (
                <AiOutlineLineChart className="text-6xl text-blue-500 mx-auto mb-4" />
              ),
            },
            {
              title: "Surging need for flexible offices",
              icon: (
                <FaComments className="text-6xl text-blue-500 mx-auto mb-4" />
              ),
            },
          ].map((challenge, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-6 rounded-lg shadow-md text-center"
            >
              {challenge.icon}
              <h3 className="text-lg font-semibold">{challenge.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
              We provide the solution
            </h2>

            <ul className="list-disc pl-6 text-gray-600 text-xl">
              <li>
                Crafting, managing, and operating branded flexible workspaces.
              </li>
              <li>Enhancing property experience with a personalized app.</li>
              <li>
                Reducing churn, enabling flexible tenancy, and fostering tenant
                reliance.
              </li>
              <li>
                Elevated services and amenities boost building-wide rents.
              </li>
              <li>Premium tenants raise market valuation attractively.</li>
            </ul>
          </div>
          <img
            src="../../public/partner9.webp"
            alt="Solution Overview"
            className="w-full rounded-md "
          />
        </div>
      </section>

      {/* Flexible & Adjustable Section */}
      <section className="py-16 px-8 md:px-32">
        <h2 className="text-2xl w-full text-center md:text-4xl font-bold mb-6">
          Flexible & Adjustable
        </h2>
        <p className="text-gray-600">
          Our conventional flexible workspace products serve prime and suburban
          locations. A network including flexible and on-demand office space
          solutions meets occupier requirements with ease. These innovative
          tenant experiences attract top-quality tenants and elevate market
          valuation.
        </p>
        <img
          src="../../public/partner8.webp"
          alt="Flexible Solutions"
          className="w-full rounded-md mt-8"
        />
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 capitalize">
          Collabors eith whom we worked 
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[plogo, plogo2, plogo3, plogo5, plogo6, plogo7].map(
            (client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md  flex items-center justify-center"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="md:w-40 w-28"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-8 md:px-32">
        <blockquote className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-600 italic">
            "Propques maximizes ROI for clients with vacant properties in
            Lucknow, ensuring substantial returns. Their expertise and
            successful assistance optimize real estate investments, delivering
            reliable and efficient services."
          </p>
          <footer className="mt-4 text-gray-700">
            — NAMIT GAUR, Owner at DHARITRI Total Property Solutions
          </footer>
        </blockquote>
      </section>

      {/* Output Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          The Output
        </h2>
        <p className="text-gray-600">
          At Propques, we believe that knowledge sharing and collaboration are
          key to driving an enterprise forward. Our workspace fosters an
          ecosphere of curiosity, innovation, purpose, and Possibility, where
          members can pose inquiries, interact, and collaborate to create unique
          solutions.
          <br />
          <br />
          Our clients rely on us to help them overcome their sales and revenue
          barriers, which results in steadily increasing ROI, monetization of
          underutilized space, risk mitigation, expansion, and unwavering
          support.
        </p>
      </section>

      {/* Mission Section */}
      <section className=" py-16 px-8 md:px-32 text-center flex">
        <img
          src={pImg}
          alt="Mission Image"
          className="w-80 mx-auto rounded-full mb-4"
        />
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            With broad smiles, more than eight years of experience, operational
            know-how, and in-depth industry knowledge, we aim to assist as many
            people as possible in establishing a presence in the flexible
            workspace sector.
          </p>
          <div className="w-full flex items-center justify-center z-[100000] my-4">
            <Button name="Let's Talk" />
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default Partners;
