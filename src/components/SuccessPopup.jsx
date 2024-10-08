import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000000000]">
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoCloseCircle className="text-2xl" />
        </button>
        <h2 className="text-lg font-bold text-center mb-4">
          Success!
        </h2>
        <p className="text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
