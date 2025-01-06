import React from "react";
import whatsapp from "../../public/Whatsapp.svg";

const Whatsapp = () => {
  return (
    <div>
      {" "}
      <a
        href="https://wa.me/9044895895"
        target="_blank"
        rel="noopener noreferrer"
        className="md:block lg:block hidden"
      >
        <img
          src={whatsapp}
          alt="Click to Download"
          className="fixed z-40 h-16 bottom-1  cursor-pointer"
        />
      </a>
      <a
        href="https://wa.me/9044895895"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden lg:hidden block"
      >
        <img
          src={whatsapp}
          alt="Click to Download"
          className="fixed  h-16 bottom-1 right-4 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
