import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SYOC = () => {
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
  const [formData, setFormData] = useState({
    ownershipType: "",
    flexDevelopmentStage: "",
    goalsForSpace: "",
    coworkingStyles: [],
    address: "",
    area: "",
    marketRate: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    hasProperty: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "coworkingStyles") {
        setFormData((prevData) => ({
          ...prevData,
          coworkingStyles: checked
            ? [...prevData.coworkingStyles, value]
            : prevData.coworkingStyles.filter((style) => style !== value),
        }));
      } else if (name === "hasProperty") {
        setFormData((prevData) => ({
          ...prevData,
          hasProperty: !checked,
          address: !checked ? "" : prevData.address,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "ownershipType",
      "flexDevelopmentStage",
      "goalsForSpace",
      "area",
      "marketRate",
      "name",
      "email",
      "phone",
    ];

    // Validate required fields
    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage(
          `Please fill in the ${field
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}.`
        );
        return false;
      }
    }

    // Validate address only if hasProperty is true
    if (formData.hasProperty && !formData.address) {
      setErrorMessage("Please provide the address of the property.");
      return false;
    }

    // Validate coworking styles selection
    if (formData.coworkingStyles.length === 0) {
      setErrorMessage("Please select at least one coworking style.");
      return false;
    }

    setErrorMessage(""); // Clear error message if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return alert("Please fill all the required fields");
    }

    setIsSubmitting(true);

    try {
      const now = new Date();
      const offset = 330; // IST offset in minutes (5 hours 30 minutes)
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        ...formData,
        timestamp,
      };

      await axios.post(
        "https://hook.eu2.make.com/irpno6z3m67rk2ft6m4q1txlqc3wu2rw",
        dataToSend
      );
      navigate("/start-your-own-coworking-space-thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 text-sm bg-gray-100 flex flex-col lg:flex-row items-start justify-center md:p-6 lg:p-6 p-0 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Insights Section */}
      <aside className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Drive 3x revenue from your property with Coworking space
        </h2>
        <p className="text-base mb-4">
          Embarking on the journey to start your own coworking space is not just
          about creating a shared workspace—it's about building a vibrant
          community where creativity, collaboration, and innovation thrive.
        </p>

        <p className="mt-4 text-base font-medium">
          With the rise of flexible work models and the demand for dynamic
          environments, coworking spaces offer a unique opportunity to cater to
          freelancers, startups, and enterprises looking for more than just an
          office. From designing inspiring interiors to curating a culture that
          fosters networking and growth, launching your coworking venture allows
          you to redefine how people work together.
        </p>
        <p className="mt-4 text-base font-medium">
          Whether you're transforming a vacant building into a bustling hub or
          reimagining shared offices, this venture can be as rewarding as it is
          impactful.
        </p>
      </aside>

      {/* Form Section */}
      <form
        className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg space-y-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Information
        </h2>

        {/* Ownership Type Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Do you own the property?
          </label>
          <select
            name="ownershipType"
            value={formData.ownershipType}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Flex Development Stage Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Where are you in the coworking space development process?
          </label>
          <select
            name="flexDevelopmentStage"
            value={formData.flexDevelopmentStage}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a stage</option>
            {/* <option value="I'm looking for the right location">
              I'm looking for the right location
            </option>
            <option value="I have a property in mind">
              I have a property in mind
            </option>
            <option value="I own a property and am exploring flex options">
              I own a property and am exploring flex options
            </option> */}
            <option value="I'm in development">I'm in development</option>
            {/* <option value="I'm already operating a coworking space space and looking to expand">
              I'm already operating a coworking space and looking to expand
            </option> */}
            <option value="I'm a broker looking to help my client">
              I'm a broker looking to help my client
            </option>
            <option value="I'm a developer looking to partner with a coworking space operator">
              I'm a developer looking to partner with a coworking space operator
            </option>
            {/* <option value="I'm a coworking space operator looking to partner with a developer">
              I'm a coworking space operator looking to partner with a developer
            </option> */}
            <option value="Something else">Something else</option>
          </select>
        </div>

        {/* Goals for Space Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What are your goals for the space?
          </label>
          <select
            name="goalsForSpace"
            value={formData.goalsForSpace}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a goal</option>
            <option value="I’m eager to start my own coworking space to maximize profitability.">
              I’m eager to start my own coworking space to maximize
              profitability.
            </option>
            <option value="I’d prefer to partner with an established operator, as I don’t have time to build my own brand..">
              I’d prefer to partner with an established operator, as I don’t
              have time to build my own brand.
            </option>

            <option value="I’m not sure yet. Let’s talk.">
              I’m not sure yet. Let’s talk.
            </option>
          </select>
        </div>

        {/* Coworking Style Checkboxes */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Coworking Style (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-1 text-sm">
            {[
              "High-end Coworking",
              "Mid-range Coworking",
              "Low-end Coworking",
              "Traditional (Desk-only) Coworking",
              // "Legacy Executive Suites",
              "Modern Executive Suites",
              // "Spec Suites",
              // "Pop-up Spaces",
              // "Industrial Conversion",
              // "Retail Conversion",
              // "Alternate Models",
              "Other",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="coworkingStyles"
                  value={style}
                  checked={formData.coworkingStyles.includes(style)}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* address */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is the address of the property?
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your city or address"
            disabled={!formData.hasProperty}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* <label className="flex items-center mt-1 space-x-2">
            <input
              type="checkbox"
              name="hasProperty"
              checked={!formData.hasProperty}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span>I don't have a property yet</span>
          </label> */}
        </div>

        {/* num of space */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is the carpet area of the space in square feet?
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter carpet area"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Honest Market Rate */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is an honest market rent on carpet area (INR per Sqft ) ?
          </label>
          <input
            type="text"
            name="marketRate"
            value={formData.marketRate}
            onChange={handleChange}
            placeholder="e.g., 50"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h2>
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-extrabold text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-extrabold text-gray-900">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Any other notes for us?
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Add any additional information here"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg shadow-lg transition duration-300 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Property Information"}
        </button>
      </form>
    </div>
  );
};

export default SYOC;
