import React from "react";

const TrustedClients = () => {
  const clients = ["CLIENT 1", "CLIENT 2", "CLIENT 3", "CLIENT 4", "CLIENT 5", "CLIENT 6"];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold poppins-regular text-gray-900">
        Trusted by Leading Businesses in Lucknow
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-3">
        We've helped startups, established businesses, and multinational corporations create their ideal
        workspaces in Lucknow and beyond.
      </p>

      {/* Clients */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-gray-200 text-gray-600 font-semibold text-sm px-6 py-4 rounded-md w-32 text-center shadow-sm"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
