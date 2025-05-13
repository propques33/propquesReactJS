// components/ConsultationModal.jsx
import React from "react";
import ConsultationForm from "./ConsultationForm";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl mt-8 shadow-2xl max-w-xl w-full relative">
<button
  onClick={onClose}
  className="absolute top-4 right-4 px-3 py-1.5 text-sm border border-red-600 bg-red-600 text-white rounded-full transition duration-300 hover:bg-white hover:text-red-600 hover:border-red-600"
>
  &times;
</button>
        <h3 className="text-2xl font-semibold mb-6 text-center">Schedule a Free Consultation</h3>
        <ConsultationForm />
      </div>
    </div>
  );
};

export default ConsultationModal;

// https://hook.eu2.make.com/e1dmgdn8bkmzln1vku0x5tf6hbogto6x