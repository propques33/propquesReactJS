import { IoChatbubblesSharp } from "react-icons/io5";
import React from "react";
import { useModal } from "../ModalContext"; // Import context

const Button = ({ name }) => {
  const { toggleForm } = useModal(); // Get function to toggle modal state

  return (
    <div>
      <button
        onClick={toggleForm} // Call toggle function on click
        className="bg-blue-500 w-full shadow-xl sm:w-auto text-center hover:bg-blue-600 transition-all ease-in-out px-6 py-2 sm:px-6 sm:py-3 rounded-xl text-white  sm:text-md md:text-[15px] flex items-center justify-center gap-2"
      >
        <IoChatbubblesSharp className="text-lg sm:text-xl" />
        <h1 className=" ">

        {name}
        </h1>
      </button>
    </div>
  );
};

export default Button;
