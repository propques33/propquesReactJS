import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MatchmakingForm = () => {
  const navigate = useNavigate();
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

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    coworkingBrand: "",
    coworkingCity: "", // Added unique key for city
    coworkingStyles: [],
    spaceSizes: [],
    experienceLevel: "",
    region: "",
    usp: "",
    marketPosition: "",
    deskPercentage: "",
    conferenceRooms: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    domain: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === "checkbox") {
        const updatedArray = checked
          ? [...(prevData[name] || []), value]
          : prevData[name].filter((v) => v !== value);
        return { ...prevData, [name]: updatedArray };
      }
      return { ...prevData, [name]: value };
    });
  };

  const validateForm = () => {
    const requiredFields = [
      "coworkingBrand",
      "coworkingCity",
      "experienceLevel",
      "region",
      "name",
      "email",
      "phone",
      "usp",
    ];

  
  };

const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  console.log("Form submission started");

  // if (!validateForm()) {
  //   alert("Please fill in all required fields.");
  //   console.log("Form validation failed", formData); // Debugging form data
  //   return;
  // }

  setIsLoading(true);

  const dateObj = new Date();
  const currentDate = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
    dateObj.getMonth() + 1
  ).padStart(2, "0")}-${dateObj.getFullYear()}`;

  const inquiryData = { ...formData, date: currentDate };
  console.log("Inquiry Data:", inquiryData); // Debugging inquiry data

  try {
    const response = await axios.post(
      "https://hook.eu2.make.com/1qfsjrk5wlsqoxwyb7x3iqqyg8egmt45",
      inquiryData
    );
    console.log("Submission Response:", response); // Debugging response
    navigate("/matchmaking-for-coworking-operators-thankyou");
  } catch (error) {
    console.error("Error submitting the form:", error);
    alert("Error submitting the form.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen mt-20 bg-gray-100 flex flex-col lg:flex-row items-start justify-center md:p-6 lg:p-6 p-0 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Insights Section */}
      <aside className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Take your brand to the next level.{" "}
        </h2>
        <p className="text-base mb-4">
          Propques is a dynamic platform designed to connect coworking chains
          with property owners who are passionate about the coworking movement.
          By evaluating property locations, space styles, and owner objectives
        </p>

        <p className="mt-4 text-base font-medium">
          Propques matches properties with coworking brands poised for success.
          These opportunities often include management contracts or rental
          agreements, ensuring flexibility and minimal capital investment for
          operators like you.
        </p>
        <p className="mt-4 text-base font-medium">
          If you're ready to partner with property owners eager to integrate
          coworking into their spaces, fill out our brief form, and we’ll get
          back to you promptly with tailored opportunities to help your brand
          grow.
        </p>
      </aside>

      {/* Form Section */}
      <form
        className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg space-y-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Coworking Information
        </h2>

        {/* Brand Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Coworking Brand Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="coworkingBrand"
            value={formData.coworkingBrand}
            onChange={handleChange}
            placeholder="Enter your brand name"
            required
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/* Expension Area Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            In Which City You Are Planning To Expand
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="coworkingCity"
            value={formData.coworkingCity}
            onChange={handleChange}
            placeholder="Enter city name"
            required
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            On which coworking model are you planning to expand?
            <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-2">
            {[
              "Revenue Sharing  Model ",
              "Profit Sharing Model",
              "Franchise Model",
              "Lease Model",
              "Others",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domain"
                  value={style}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Coworking Style */}
        <div>
          <label className="block text-sm font-medium text-gra">
            Coworking Style (Select all that apply)
            <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-2">
            {[
              "High-end Coworking",
              "Mid-range Coworking",
              "Low-end Coworking",
              "Traditional (Desk-only) Coworking",
              "Legacy Executive Suites",
              "Modern Executive Suites",
              // "Spec Suites",
              // "Pop-up Spaces",
              // "Industrial Conversion",
              // "Retail Conversion",
              "Others",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="coworkingStyles"
                  value={style}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Space Sizes */}
        <div>
          <label className="block text-sm font-medium text-gra">
            Space Sizes You Operate In<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              // "0 - 5k square feet",
              "5 - 10k square feet",
              "10 - 50k square feet",
              "50k+ square feet",
            ].map((size) => (
              <label key={size} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="spaceSizes"
                  value={size}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gra">
            Experience Level as an Operator
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select experience level</option>
            {/* <option value="No Experience">No Experience</option> */}
            <option value="0-3 years">0 - 3 years</option>
            <option value="4+ years">4+ years</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-gra">
            Current City or Region of Operation
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Enter your city or region"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* USP */}
        <div>
          <label className="block text-sm font-medium text-gra">
            What makes you unique?
          </label>
          <input
            type="text"
            name="usp" // Ensure this matches the key in formData
            value={formData.usp}
            onChange={handleChange}
            placeholder="Share what makes your coworking brand unique"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Desk Percentage */}
        <div>
          <label className="block text-sm font-medium text-gra">
            What percentage of square feet of your space is typically dedicated
            to desks?
          </label>
          <input
            type="number"
            name="deskPercentage"
            value={formData.deskPercentage}
            onChange={handleChange}
            placeholder="e.g., 50"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Conference Rooms */}
        <div>
          <label className="block text-sm font-medium text-gra">
            How many conference rooms does your space typically have?
          </label>
          <input
            type="number"
            name="conferenceRooms"
            value={formData.conferenceRooms}
            onChange={handleChange}
            placeholder="e.g., 2"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h2>

        <div>
          <label className="block text-sm font-medium text-gra">
            Name<span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gra">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gra">
              Phone<span className="text-red-600">*</span>
            </label>

            <input
              type="tel"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gra">
            Any other notes for us?
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Add any additional information here"
            className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300"
        >
          Submit Matchmaking Inquiry
        </button>
      </form>
    </div>
  );
};

export default MatchmakingForm;
