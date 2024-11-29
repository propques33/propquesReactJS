import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalForm = () => {
  const navigate = useNavigate();
  const { isFormOpen, toggleForm } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalExpectation: "",
    city: "",
    microMarket: "",
    areaCarpet: "",
    areaSuper: "",
    propertyDetails: "",
    coworkingOption: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      navigate("/thankyou");
    }
  }, [isSuccess, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.areaCarpet < 3500 || formData.areaSuper < 3500) {
      alert("Both Carpet Area and Super Area must be at least 3500 sq. ft.");
      return;
    }

    setIsLoading(true);

    try {
      // Add the current timestamp with IST timezone to the formData
      const now = new Date();
      const offset = 330; // IST offset in minutes (5 hours 30 minutes)
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0]; // Format to YYYY-MM-DD HH:mm:ss

      const dataToSend = {
        ...formData,
        timestamp, // Add timestamp field
      };

      // Send data to Make.com webhook
      await axios.post(
        "https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1",
        dataToSend
      );

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        rentalExpectation: "",
        city: "",
        microMarket: "",
        areaCarpet: "",
        areaSuper: "",
        propertyDetails: "",
        coworkingOption: "",
      });
      toggleForm();
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isFormOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000000000000000]"
      id="contact-btn"
    >
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <button
          onClick={toggleForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-md font-bold mb-4 text-center">
          Please fill out this form to provide us with more details about your
          property
          <p className="text-sm">
            We will reach out to you if we are a mutual fit.
          </p>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Phone"
              required
            />
          </div>

          <div className="mb-4 flex gap-2">
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select City</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Delhi">Delhi</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Goa">Goa</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Indore">Indore</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Kochi">Kochi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Noida">Noida</option>
              <option value="Pondicherry">Pondicherry</option>
              <option value="Pune">Pune</option>
            </select>

            <input
              type="text"
              name="microMarket"
              value={formData.microMarket}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Micro Market"
              required
            />
          </div>

          <div className="mb-4 flex gap-2">
            <input
              type="number"
              name="rentalExpectation"
              value={formData.rentalExpectation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Rental Expectation"
              required
            />
          </div>

          <div className="mb-4 flex gap-2">
            <input
              type="number"
              name="areaSuper"
              value={formData.areaSuper}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Super Area (sq. ft.)"
              required
            />
            <input
              type="number"
              name="areaCarpet"
              value={formData.areaCarpet}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Carpet Area (sq. ft.)"
              required
            />
          </div>

          <div className="mb-4">
            <select
              name="coworkingOption"
              value={formData.coworkingOption}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Coworking Option</option>
              <option value="Start Your Own Coworking">
                Start Your Own Coworking
              </option>
              <option value="Match Making With Coworking">
                Match Making With Coworking
              </option>
            </select>
          </div>

          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
