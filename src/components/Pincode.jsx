import React, { useState } from "react";
import axios from "axios";

const PincodeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Function to fetch data when user types
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://propques-backend-jsqqh.ondigitalocean.app/api/pincode/${value}`
        );
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setResults([]);
    }
  };

  // Function to handle user selection
  const handleSelect = (item) => {
    console.log("Selected Pincode:", item.pincode);
    console.log("Location Details:", item.locations, item.city, item.state);

    // Set input field with selected pincode
    setQuery(
      `${item.pincode} - ${item.locations}, ${item.city}, ${item.state}`
    );

    // Store selected data for display below input
    setSelectedData(item);

    // Close the dropdown
    setResults([]);
  };

  return (
    <div className="">
      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter Pincode"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown Results */}
      {results.length > 0 && (
        <ul className="mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="p-3 cursor-pointer hover:bg-gray-100 transition"
            >
              {item.pincode} - {item.locations}, {item.city}, {item.state}
            </li>
          ))}
        </ul>
      )}

  
    </div>
  );
};

export default PincodeSearch;
