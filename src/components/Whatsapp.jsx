import React from "react";
import whatsapp from "../../public/Whatsapp.svg";

const Whatsapp = () => {
  return (
    <div>
      {" "}
      <a
        href="https://api.whatsapp.com/send/?phone=917392037856&text=Hello%21+I+would+like+to+inquire+about+your+coworking+matchmaking+and+starting+your+own+coworking+business+model&type=phone_number&app_absent=0"
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
        href="https://api.whatsapp.com/send/?phone=917392037856&text=Hello%21+I+would+like+to+inquire+about+your+coworking+matchmaking+and+starting+your+own+coworking+business+model&type=phone_number&app_absent=0"
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
