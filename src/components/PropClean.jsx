import React from "react";

const PropCleanHowItWorks = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center max-w-5xl mx-auto">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <img
          src="https://via.placeholder.com/150x50" // Replace with your actual logo URL
          alt="PropClean Logo"
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-700 mb-6">
          PropClean simplifies property and workspace management with a
          straightforward and efficient workflow.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Install the App</span>
          </li>
          <p className="text-gray-600 pl-6">
            Download the PropClean mobile app from your device’s app store and
            set it up for immediate use.
          </p>
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Setup Your Space</span>
          </li>
          <p className="text-gray-600 pl-6">
            Configure workspace details such as locations, tasks, and roles.
          </p>
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Onboard Your Staff</span>
          </li>
          <p className="text-gray-600 pl-6">
            Add team members, assign roles, and set permissions for task
            management.
          </p>
        </ul>
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <div className="bg-blue-50 rounded-lg p-4 shadow-lg">
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            Updated in Jan 2023
          </div>
          <img
            src="https://via.placeholder.com/300x400" // Replace with your actual image URL
            alt="PropClean App"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PropCleanHowItWorks;
