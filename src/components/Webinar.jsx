import React, { useEffect } from "react";
import {
  FaRegHandshake,
  FaRegClock,
  FaRegBuilding,
  FaQuoteLeft,
  FaLightbulb,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import c187f5b810329f4d74ed7f30d5d05c197271e from "../../public/webinarimg.png";

const WebinarPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="font-sans mt-10 ">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4  md:px-16 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Monetize Your Commercial Assets for Stable & Rapid Income
            </h1>
            <p className="text-md text-gray-600">
              Are you ready to turn your commercial assets into consistent,
              high-yield revenue streams?
              <br />
              Whether you’re a property owner or investor, join our webinar to
              explore proven strategies that generate stable and rapid income
              from commercial properties.
            </p>
            <button
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg text-md shadow-lg hover:bg-blue-600 mx-auto md:mx-0"
              onClick={() =>
                window.open(
                  "https://webinar.zoho.in/meeting/register?sessionId=1338139536",
                  "_blank"
                )
              }
            >
              Register Now <BsArrowRight className="ml-2" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={c187f5b810329f4d74ed7f30d5d05c197271e}
              alt="Webinar"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-16 px-8 md:px-32 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Key Takeaways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Key Takeaway Items */}
          {[
            {
              title: "Generate Reliable, Stable Income",
              icon: <FaRegBuilding className="text-6xl text-blue-500 mb-4" />,
              description:
                "Secure dependable tenants, sublease unused spaces, and enhance property appeal.",
            },
            {
              title: "Achieve Rapid Income for Immediate Gains",
              icon: <FaRegClock className="text-6xl text-yellow-500 mb-4" />,
              description:
                "Leverage short-term rentals, event spaces, and dynamic pricing to maximize revenue.",
            },
            {
              title: "Optimize & Grow Your Portfolio",
              icon: <FaRegHandshake className="text-6xl text-green-500 mb-4" />,
              description:
                "Diversify your tenant portfolio and leverage cutting-edge management tools.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white w-full flex items-center flex-col  p-6 rounded-lg shadow-lg text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Attend Section */}
      <section className="py-16 px-8 md:px-32 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Attend?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Actionable Steps",
              description:
                "Learn actionable steps to maximize income from your commercial assets.",
              icon: (
                <FaRegHandshake className="text-5xl text-blue-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Innovative Strategies",
              description:
                "Explore innovative strategies tailored to the commercial property landscape.",
              icon: (
                <FaLightbulb className="text-5xl text-yellow-500 mb-4 mx-auto" />
              ),
            },
            {
              title: "Expert Insights",
              description:
                "Gain insights from industry experts with real-world success stories.",
              icon: (
                <FaRegBuilding className="text-5xl text-green-500 mb-4 mx-auto" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 md:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Attendees Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "This webinar was a game-changer! I learned how to increase revenue without major investments.",
              author: "Ramesh Gupta",
              role: "Property Manager",
            },
            {
              quote:
                "The strategies shared were incredibly practical and easy to implement. Highly recommended!",
              author: "Anjali Shah",
              role: "Real Estate Developer",
            },
            {
              quote:
                "This session helped me transform my vacant property into a high-performing asset.",
              author: "Karan Mehta",
              role: "Entrepreneur",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg text-center"
            >
              <FaQuoteLeft className="text-3xl text-blue-500 mb-4 mx-auto" />
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <p className="text-blue-600 font-semibold mt-4">
                {testimonial.author}
              </p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 py-16 px-8 text-center flex flex-col items-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now!</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Don’t miss this opportunity to transform your commercial properties
          into powerful income-generating assets.
        </p>
        <button
          className="flex items-center justify-center bg-white text-blue-500 px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-gray-100"
          onClick={() =>
            window.open(
              "https://webinar.zoho.in/meeting/register?sessionId=1338139536",
              "_blank"
            )
          }
        >
          Click Here to Register <BsArrowRight className="ml-2" />
        </button>
      </section>
    </div>
  );
};

export default WebinarPage;
