import React from "react";
import Button from "./Button";
import image from '../../public/image.png';

const GetInTouch = () => {
  return (
    <div className="flex flex-col sm:flex-row md:px-8 space-y-6 sm:space-y-0">
      <div className="w-full sm:w-1/2 bg-white rounded-lg md:p-8 p-6 ">
        <h2 className="md:text-5xl text-2xl font-bold mb-4 text-blue-600">
          Get In Touch
        </h2>
        <p className="mb-6  text-gray-700 leading-relaxed">
          We are here to assist. Simply fill the form to help us understand your
          business, vision, and goals, so we can provide our exceptional
          services and suggestions to you.
        </p>
        <blockquote className="md:text-4xl font text-xl italic mb-6 text-blue-600">
          “Turn Your Vision Into a Reality”
        </blockquote>
        <Button name={"Let's Talk"} />
      </div>

      <div className="w-full sm:w-1/2 flex items-center justify-center px-4 md:px-">
        <img
          src={image}
          alt="Office"
          className="w-full h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
