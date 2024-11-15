import React from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'; 
import checkgreen from '../../public/check-green.gif'
import { Link } from "react-router-dom";
const SuccessPage = () => {

  return (
    <div className="mt-20 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg max-w-lg text-center">
      <div className="">
      <img 
            src={checkgreen}
            alt="Success Illustration" 
            className="mx-auto rounded-full h-20"
          />
      </div>
        <h2 className="text-2xl font-semibold mb-4">Form Submitted Successfully!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for submitting the form. We have received your information and will get in touch with you shortly.
        </p>

        <Link to="/" className="text-blue-500">Go Back Home</Link>
        
    
    
      </div>
    </div>
  );
};

export default SuccessPage;
