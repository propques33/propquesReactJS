import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SYOC = () => {
  const [formData, setFormData] = useState({
    textCustomField3: "",
    mobile: "",
    flexDevelopmentStage: "",
    textCustomField7: "",
    textCustomField4: "",
    textCustomField11: "",
    textCustomField12: "",
    textCustomField5: "",
    textCustomField6: [],
    textCustomField8: [],
    billingZipCode: "",
    textCustomField15: "",
    decimalCustomField2: "",
    textCustomField10: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    domain: [],
    furnishCost: "",
   
    tags: "SYOC Form",
  });

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 6) {
      try {
        const res = await axios.get(
          `https://api.postalpincode.in/pincode/${value}`
        );
        if (res.data[0].Status === "Success") {
          const mapped = res.data[0].PostOffice.map((po) => ({
            billingZipCode: po.Pincode, // Zip Code
            textCustomField7: po.Name, // Micro Market
            billingCity: po.Block || po.District, // City
            billingState: po.State, // State
          }));

          setResults(mapped);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Error fetching from India Post API:", error);
      }
    } else {
      setResults([]);
    }
  };

  const handleSelect = (item) => {
    setQuery(
      `${item.billingZipCode} - ${item.textCustomField7}, ${item.billingCity}, ${item.billingState}`
    );

    setFormData((prevData) => ({
      ...prevData,
      billingZipCode: item.billingZipCode,
      textCustomField7: item.textCustomField7, // Micro Market
      billingCity: item.billingCity,
      billingState: item.billingState,
    }));

    setResults([]);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "textCustomField6") {
        setFormData((prevData) => ({
          ...prevData,
          textCustomField6: checked
            ? [...prevData.textCustomField6, value]
            : prevData.textCustomField6.filter((style) => style !== value),
        }));
      } else if (name === "textCustomField8") {
        setFormData((prevData) => ({
          ...prevData,
          textCustomField8: checked
            ? [...prevData.textCustomField8, value] // ✅ FIXED: Add value to textCustomField8 array
            : prevData.textCustomField8.filter((item) => item !== value), // ✅ Remove if unchecked
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
      "textCustomField3",
      "flexDevelopmentStage",
      "textCustomField5",
      "decimalCustomField2",
      "textCustomField10",
      "name",
      "email",
      "phone",
    ];

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

    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const now = new Date();
      const offset = 330;
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        ...formData,
        textCustomField6: formData.textCustomField6.join(", "),
        textCustomField8: formData.textCustomField8.join(", "),
        domain: formData.domain.join(", "),
        timestamp,
        type: "New",
      };

      // Send to Make.com
      await axios.post(
        "https://hook.eu2.make.com/irpno6z3m67rk2ft6m4q1txlqc3wu2rw",
        dataToSend
      );

      // Send to your backend
      await axios.post("https://pq-backend-fus-pq-blog-z5iz7.ondigitalocean.app/api/contact", dataToSend);

      navigate("/start-your-own-coworking-space-thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 text-sm bg-gray-100 flex flex-col lg:flex-row items-start justify-center md:p-6 lg:p-6 p-0 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Insights Section */}
      <aside className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
        Make Your Space Work for You—3X Revenue with Coworking
        </h2>
        <p className="text-base mb-4">
        Stop letting valuable space sit idle. In today’s flexible work era, your commercial property has the potential to generate up to 3x higher returns—simply by transforming it into a coworking space.
        </p>

        <p className="mt-4 text-base font-medium">
        Whether it’s an empty floor, a low-occupancy building, or an old office setup, you can unlock its full earning potential by catering to the growing demand from freelancers, growing startups, and enterprise clients seeking flexible, plug-and-play workspaces.
        </p>
        <p className="mt-4 text-base font-medium">
        From layout planning to tenant acquisition, we help you transform your space into a premium coworking destination. 
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
            name="textCustomField3"
            value={formData.textCustomField3}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Goals for Space Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What are your goals for the space?
          </label>
          <select
            name="textCustomField5"
            value={formData.textCustomField5}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a goal</option>
            <option value="I'm a broker looking to help my client">
              I'm a broker looking to help my client
            </option>

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
              "Modern Executive Suites",

              "Other",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="textCustomField6"
                  value={style}
                  checked={formData.textCustomField6.includes(style)}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* address */}
        <div className="">
          <label className="block text-sm font-extrabold text-gray-900 mb-1">
            Enter Your Property's Pincode
          </label>
          {/* billingZipCode Search */}
          <div className="mb-4 relative ">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Enter Pincode"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {results.length > 0 && (
              <ul className="dropdown">
                {results.map((item, index) => (
                  <li key={index} onClick={() => handleSelect(item)}>
                    {item.billingZipCode} - {item.textCustomField7},{" "}
                    {item.billingCity}, {item.billingState}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Carpet decimalCustomField2 */}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">
            On which coworking model are you planning to expand?
            <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-2">
            {[
              "Lease Model",
              "Revenue Sharing Model",
              "Profit Sharing Model",
              "Franchise Model",
              "Others",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="textCustomField8" // ✅ FIXED: Ensure the correct name
                  value={style}
                  checked={formData.textCustomField8.includes(style)} // ✅ FIXED: Correctly check state
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Are you willing to invest in furnishing the space according to the
            client's preferences, with the cost adjusted in the rental?
          </label>
          <select
            name="textCustomField11"
            value={formData.textCustomField11}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            The cost of furnishing would be:
          </label>
          <select
            name="textCustomField12"
            value={formData.textCustomField12}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="₹2500 sq. ft.">₹2500/- sq. ft.</option>
            <option value="₹3000 sq. ft.">₹3000/- sq. ft.</option>
          </select>
        </div>

        {/* num of space */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is the carpet area of the space in square feet?
          </label>
          <input
            type="text"
            name="decimalCustomField2"
            value={formData.decimalCustomField2}
            onChange={handleChange}
            placeholder="Enter carpet area"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Honest Market Rate */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is an honest market rent on carpet area (INR per Sqft)?
          </label>
          <input
            type="text"
            name="textCustomField10"
            value={formData.textCustomField10}
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
            name="textCustomField15"
            value={formData.textCustomField15}
            onChange={handleChange}
            rows="4"
            placeholder="Add any additional information here"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div class="my-">
          <label class="flex items-start space-x-2">
            <input type="checkbox" required class="mt-1" />
            <span class="text-sm text-gray-700">
              By submitting, you agree to list your property on{" "}
              <strong>Propques</strong>. Your contact details will be shared
              based on your selected preferences.
            </span>
          </label>
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
