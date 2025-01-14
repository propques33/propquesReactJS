import React from "react";
import find from "../../public/find.png";
const FindUrSpaceUI = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Single Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto p-8">
          {/* Hero Section */}
          <div className="flex flex-col items-center">
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img
                src={find} // Replace this with your actual image URL
                alt="Coworking Space"
                className=""
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-4">
              {/* <h2 className="text-4xl font-bold mb-4">
                Find Your Ideal Workspace
              </h2> */}
              <p className="text-lg text-center">
                Discover coworking spaces tailored to your needs, from bustling
                cities to serene hubs.
              </p>
              {/* <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100">
                Start Your Search Now!
              </button> */}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-4 py-6 px-20 bg-white rounded-full shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-500">
              How It Works
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <h4 className="font-bold text-zinc-800 ">Submit Preferences</h4>
                <p className="text-md text-gray-800">
                  Share your requirements location, size, and amenities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <h4 className="font-bold text-zinc-800">AI Matches You</h4>
                <p className="text-md text-gray-800">
                  Our AI recommends the top coworking spaces for you.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <h4 className="font-bold text-zinc-800">AI Bot Call</h4>
                <p className="text-md text-gray-800">
                  Get feedback and schedule viewings easily.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                  4
                </div>
                <h4 className="font-bold text-zinc-800">
                  Confirm with Managers
                </h4>
                <p className="text-md text-gray-800">
                  Finalize details with workspace managers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                  5
                </div>
                <h4 className="font-bold text-zinc-800">Close the Deal</h4>
                <p className="text-md text-gray-800">
                  Visit the space and choose the perfect one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindUrSpaceUI;
