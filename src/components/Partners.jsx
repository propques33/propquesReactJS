import React, { useEffect } from "react";
import {
  FaRegHandshake,
  FaLightbulb,
  FaRegBuilding,
  FaBullhorn,
  FaEnvelope,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import connect from '../../public/connect.png'

import plogo from "../../public/plogo.webp";
import plogo2 from "../../public/plogo2.png";
import plogo3 from "../../public/plogo3.png";
import plogo5 from "../../public/plogo5.png";
import plogo6 from "../../public/plogo6.png";
import plogo7 from "../../public/plogo7.webp";
import pImg from "../../public/pImg.jpg";
import Button from "./Button";
import partner9 from "../../public/partner9.webp";
import partner8 from "../../public/partner8.webp";
import { Helmet } from "react-helmet";

const PartnerWebinarPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="font-sans md:mt-0 mt-20 font-extrabold">
      <Helmet>
  <title>Partner with Propques: Coworking Opportunities</title>
  <meta
    name="description"
    content="Collaborate with Propques to explore coworking opportunities and partnerships in India."
  />
  <link rel="canonical" href="https://propques.com/partners-with-us" />
</Helmet>

      <section className=" py-1 md:px-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              How to Generate More Leads for Your Property Listings
            </h1>
            <p className="text-md text-gray-600">
              Boost Your Listings' Visibility & Drive Tenant Engagement. Join us
              for an insightful webinar to discover innovative strategies and
              tools for attracting tenants and maximizing your property's
              potential.
            </p>
            <button
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg text-md shadow-lg hover:bg-blue-600 mx-auto md:mx-0"
              onClick={() =>
                window.open(
                  "https://webinarlab.zoho.in/meeting/register?sessionId=1346185406",
                  "_blank"
                )
              }
            >
              Register Here <BsArrowRight className="ml-2" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={connect}
              alt="Webinar"
              className="w-full"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-8 md:px-32 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Optimize Your Online Listings",
              description: `
                Professional Media
                Compelling Descriptions
                SEO-Optimized Content
              `,
              icon: (
                <FaRegBuilding className="text-5xl text-blue-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Leverage Social Media",
              description: `
                Targeted Ads
                Engaging Content
                Live Virtual Tours
              `,
              icon: (
                <FaBullhorn className="text-5xl text-yellow-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Master Email Marketing",
              description: `
                Segmented Campaigns
                Consistent Updates
                Automation
              `,
              icon: (
                <FaEnvelope className="text-5xl text-green-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Collaborate for Partnerships",
              description: `
                Landlord Reps
                Influencers & Agents
                Community Engagement
              `,
              icon: (
                <FaRegHandshake className="text-5xl text-purple-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Build Trust with Resources",
              description: `
                Free Market Insights
                Interactive Tools
                Testimonials
              `,
              icon: <FaUsers className="text-5xl text-red-500 mb-4 mx-auto" />,
            },
            {
              title: "Better Potential Idea of Your Property",
              description: `
             Maximize Your Property's True Potential
              `,
              icon: (
                <FaLightbulb className="text-5xl text-yellow-500 mb-4 mx-auto" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-lg text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line -mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Addressing Market Challenges Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Addressing Current Market Challenges
        </h2>
        <div className=" text-gray-600 md:text-lg text-base  mx-auto">
          <p>
            <strong>Do your clients face issues like:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Lack of flexible workspaces?</li>
            <li>Increased vacancy rates?</li>
            <li>Surging demand for offices?</li>
          </ul>
          <p className="pt-8">
            <strong>We Provide Solutions:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Flexible Workspace Management</li>
            <li>Offer personalized tenant apps to improve engagement</li>
            <li>Tenant-Centric Strategies</li>
          </ul>
        </div>
      </section>

      {/* Flexible Solutions Section */}
      <section className="py-16 px-8 md:px-32 0 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Flexible Solutions for Every Requirement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Prime & Suburban Locations",
              description:
                "Meet tenant needs with conventional and on-demand office spaces.",
              icon: (
                <i className="text-5xl text-blue-500 mb-4 mx-auto">
                  <FaMapMarkerAlt />
                </i>
              ),
            },
            {
              title: "Innovative Tenant Experiences",
              description:
                "Attract top-quality tenants and elevate market valuations.",
              icon: (
                <i className="text-5xl text-yellow-500 mb-4 mx-auto">
                  <FaLightbulb />
                </i>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 flex flex-col items-center rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 capitalize">
          Collaborators We've Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[plogo, plogo2, plogo3, plogo5, plogo6, plogo7].map(
            (client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="md:w-40 w-28"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-blue-500 flex flex-col items-center py-16 px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          With over eight years of industry expertise, we strive to assist as
          many people as possible in building a successful presence in the
          flexible workspace sector, delivering innovative solutions and
          operational excellence.
        </p>
        <button
          className="flex items-center justify-center bg-white text-blue-500 px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-gray-100"
          onClick={() =>
            window.open(
              "https://webinarlab.zoho.in/meeting/register?sessionId=1346185406",
              "_blank"
            )
          }
        >
          Join the Webinar Now <BsArrowRight className="ml-2" />
        </button>
      </section>
    </div>
  );
};

export default PartnerWebinarPage;
