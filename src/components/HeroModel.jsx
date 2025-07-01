import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "+91",
    email: "",
    billingZipCode: "",
    decimalCustomField2: "",
    textCustomField7: "", // micromarket
    textCustomField2: "", // coworking option
    billingCity: "",
    billingState: "",
    agreeToContact: true,
  });

  const [pincodeOptions, setPincodeOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPincodeDetails = async (pincode) => {
    try {
      const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      if (res.data[0].Status === "Success") {
        return res.data[0].PostOffice.map((details) => ({
          city: details.Block || details.District,
          state: details.State,
          micromarket: details.Name,
        }));
      }
      return [];
    } catch (err) {
      console.error("Failed to fetch pincode info", err);
      return [];
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
  
    if (value.length === 6) {
      try {
        const res = await axios.get(`https://api.postalpincode.in/pincode/${value}`);
        if (res.data[0].Status === "Success") {
          const mapped = res.data[0].PostOffice.map((po) => ({
            pincode: po.Pincode,
            locations: po.Name,
            city: po.Block || po.District || "",
            state: po.State,
          }));
          setResults(mapped);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("India Post API error:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };


  const handleSelect = (item) => {
    setQuery(`${item.pincode} - ${item.locations}, ${item.city}, ${item.state}`);
    setFormData((prevData) => ({
      ...prevData,
      pincode: item.pincode,
      location: item.locations,
      city: item.city,
      state: item.state,
    }));
    setResults([]);
  };
  
  

  const handlePincodeInput = async (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, billingZipCode: value }));

    if (value.length === 6) {
      const results = await fetchPincodeDetails(value);
      setPincodeOptions(results);
    } else {
      setPincodeOptions([]);
    }
  };

  const handlePincodeSelect = (location) => {
    setFormData((prev) => ({
      ...prev,
      billingCity: location.city || "",
      billingState: location.state || "",
      textCustomField7: location.micromarket || "",
    }));
    setPincodeOptions([]);
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "name" && { lastname: value }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    

    try {
      const now = new Date();
      const offset = 330;
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      // Safety: convert all values to strings to avoid API issues
      const clean = (v) =>
        typeof v === "string" ? v : v === undefined || v === null ? "" : v.toString();

      const dataToSend = {
        name: clean(formData.name),
        lastname: clean(formData.lastname),
        phone: clean(formData.phone),
        email: clean(formData.email),
        billingZipCode: clean(formData.billingZipCode),
        decimalCustomField2: clean(formData.decimalCustomField2),
        textCustomField7: clean(formData.textCustomField7), // micromarket
        textCustomField2: clean(formData.textCustomField2), // coworking option
        billingCity: clean(formData.billingCity),
        billingState: clean(formData.billingState),
        agreeToContact: true,
        timestamp,
        type: "New",
        tags: "Landing Page Form"
      };

      // 1. Send to Make
      await axios.post("https://hook.eu2.make.com/irpno6z3m67rk2ft6m4q1txlqc3wu2rw", dataToSend);

      // 2. Send to backend
      await axios.post(
        "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/hero-model",
        dataToSend
      );

      navigate("/start-your-own-coworking-space-thankyou");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <p className="text-blue-500 text-center">
        We will reach out to you if we are a mutual fit
      </p>
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="phone"
        placeholder="Enter Mobile Number"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <div className="relative">
        <input
          name="billingZipCode"
          placeholder="Enter Pincode"
          value={formData.billingZipCode}
          onChange={handlePincodeInput}
          required
          className="w-full p-2 border rounded"
        />
        {pincodeOptions.length > 0 && (
          <ul className="absolute bg-white border rounded w-full z-10 max-h-40 overflow-y-auto">
            {pincodeOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handlePincodeSelect(option)}
              >
                {option.micromarket}, {option.city}, {option.state}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <input
        type="text"
        name="decimalCustomField2"
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Carpet Area (sq. ft.)"
        required
      />
      <select
        name="textCustomField2"
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Coworking Option</option>
        <option value="Start Your Own Coworking">Start Your Own Coworking</option>
        <option value="Match Making With Coworking">Match Making With Coworking</option>
      </select>
      <label className="flex items-center text-sm text-gray-500">
        <input type="checkbox" className="mr-2" required />
        I am happy for propques to contact me via mail/SMS. By selecting this you agree to our privacy policy.
      </label>
      <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-blue-600 text-white rounded">
        {isSubmitting ? "Submitting..." : "Let's Talk"}
      </button>
    </form>
  );
}
