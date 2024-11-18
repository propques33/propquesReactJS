import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the clicked question
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Collapse if active, otherwise expand
  };

  // Array of FAQs
  const faqs = [
    {
      question: "What is coworking?",
      answer:
        "In the Indian perspective, coworking refers to the collaborative work environment that brings together professionals, entrepreneurs, and freelancers from diverse industries and companies to share a common office space. This concept offers convenience by allowing individuals to share facilities, utilities, and services, leading to cost savings over time. Coworking spaces provide a dedicated location for conducting business activities and project work, while also fostering networking opportunities and social interactions. In essence, coworking offers an affordable alternative to working from home or coffee shops, providing a shared workspace that promotes productivity and collaboration.",
    },
    {
      question: "What is flexible office space?",
      answer:
        "A flexible office space refers to a versatile workspace that offers multiple options for desk layouts and office configurations. This adaptability allows members to customize their environment to suit their specific requirements. Flexible office spaces typically provide essential office amenities such as desks, chairs, computers, storage, and decor. They offer the flexibility to accommodate teams of different sizes, cater to various industries, and cater to the unique preferences of individuals. The aim is to create a workspace that can be easily adapted and optimised for productivity and comfort.",
    },
    {
      question: "How can coworking increase revenue?",
      answer:
        "Hiring a propques as your coworking consultant provides you with expert guidance, customized solutions, and valuable market insights. Their extensive industry knowledge allows them to address your specific challenges and help you make well-informed decisions. By leveraging their tailored recommendations, you can unlock the full potential of your coworking space. Propques' wide network also opens doors to valuable partnerships, while their cost-effective strategies optimize your operations. With their ongoing support, you can ensure long-term success. By tapping into their expertise and saving time and resources, hiring a propques empowers your coworking business to flourish in a competitive market.",
    },
    {
      question: "How much do you charge as consultancy fees?",
      answer:
        "The consultancy fees for our services vary depending on the specific requirements and scope of the project. We believe in providing tailored solutions that best meet your needs, so our pricing is determined on a case-by-case basis. Factors such as the complexity of the project, the level of expertise required, and the expected duration of the engagement are taken into consideration when determining the fees. We strive to offer competitive and fair pricing that reflects the value we bring to your business. To receive a detailed quote for your consultancy needs, please contact us directly to discuss your specific requirements.",
    },
    {
      question: "How long does it take to set up a coworking space?",
      answer:
        "The timeline varies depending on the scale of the project, but typically we can help you start seeing revenue within 6 months.",
    },
    {
      question: "What is the future of flexible spaces?",
      answer:
        "The future of flexible spaces is promising, driven by evolving work trends and the demand for agility. Innovation in design, technology integration, and amenities will enhance productivity and connectivity. Sustainability practices and wellness initiatives will gain importance. With these advancements, flexible spaces will continue to cater to the changing needs of professionals and businesses in a dynamic work landscape.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:py-16 md:px-8 flex flex-col md:flex-row gap-8 w-full">
      {/* Left Section */}
      <div className="bg-blue-500 rounded-xl w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold text-center leading-tight">
          We believe in growth
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              {/* Question */}
              <div
                className="flex justify-between items-center px-4 md:px-6 py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-md sm:text-lg md:text-xl font-semibold">
                  {faq.question}
                </h2>
                <span className="text-lg md:text-2xl">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>

              {/* Smooth Transition for Answer */}
              <div
                className={`overflow-hidden transition-all ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-4 md:px-6 py-4 bg-gray-50">
                  <p className="text-gray-700 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
