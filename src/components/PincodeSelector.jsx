import React, { useState } from "react";
import axios from "axios";

const PincodeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [formData, setFormData] = useState({
    pincode: "",
    location: "",
    city: "",
    state: "",
  });

  // Fetch location details as the user types
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://propques-backend-jsqqh.ondigitalocean.app/api/pincode/${value}`
        );
        setResults(Array.isArray(res.data) ? res.data : [res.data]); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching location details:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  // Select pincode from search results
  const handleSelect = (item) => {
    setQuery(
      `${item.pincode} - ${item.locations[0]}, ${item.city}, ${item.state}`
    );
    setFormData({
      pincode: item.pincode.trim(),
      location: item.locations?.[0] || "N/A", // Extract first micromarket
      city: item.city.trim(),
      state: item.state.trim(),
    });
    setResults([]);
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Search Pincode</h2>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter Pincode"
        className="w-full p-2 border rounded mb-3"
      />

      {/* Dropdown Results */}
      {results.length > 0 && (
        <ul className="border rounded shadow-md bg-white max-h-40 overflow-y-auto">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.pincode} - {item.locations?.[0] || "N/A"}, {item.city},{" "}
              {item.state}
            </li>
          ))}
        </ul>
      )}

      {/* Display Selected Location Details */}
      {formData.pincode && (
        <div className="mt-4">
          <p>
            <strong>Pincode:</strong> {formData.pincode}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>State:</strong> {formData.state}
          </p>
          <p>
            <strong>Micromarket:</strong> {formData.location}
          </p>
        </div>
      )}
    </div>
  );
};

export default PincodeSearch;
