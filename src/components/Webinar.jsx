import React, { useEffect } from "react";
import {
  FaUsers,
  FaLightbulb,
  FaRegCalendarAlt,
  FaQuoteLeft,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import c187f5b810329f4d74ed7f30d5d05c197271e from "../../public/126c187f5b810329f4d74ed7f30d5d05c197271e.jpg";
const WebinarPage = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="font-sans mt-10   ">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-0">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Unlock the Potential of Your Commercial Assets
            </h1>
            <p className="text-lg text-gray-600">
              Discover actionable strategies to boost your revenue by 3X and
              transform your underutilized commercial spaces into profitable
              assets.
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600"
              onClick={() =>
                window.open(
                  "https://webinar.zoho.in/meeting/register?sessionId=1338139536",
                  "_blank"
                )
              }
            >
              Register for the Webinar
            </button>
          </div>
          <img
            src={c187f5b810329f4d74ed7f30d5d05c197271e}
            alt="Hero"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 px-8 md:px-32 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Attend This Webinar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Proven Strategies",
              description:
                "Learn actionable methods to optimize your commercial property.",
              icon: (
                <BsGraphUp className="text-6xl mx-auto text-blue-500 mb-4" />
              ),
            },
            {
              title: "Expert Insights",
              description:
                "Hear from industry leaders and understand market trends.",
              icon: (
                <FaLightbulb className="text-6xl mx-auto text-yellow-500 mb-4" />
              ),
            },
            {
              title: "Maximize ROI",
              description:
                "Discover tools and techniques to enhance your property's value.",
              icon: (
                <GiMoneyStack className="text-6xl mx-auto text-green-500 mb-4" />
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
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Property?
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Join our webinar and take the first step toward unlocking the full
          earning potential of your commercial assets. Don’t miss this
          opportunity!
        </p>
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600"
          onClick={() =>
            window.open(
              "https://webinar.zoho.in/meeting/register?sessionId=1338139536",
              "_blank"
            )
          }
        >
          Register Now
        </button>
      </section>
    </div>
  );
};

export default WebinarPage;
