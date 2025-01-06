import React, { useState, useEffect } from "react";
import Button from "./Button";
import Whatsapp from "./Whatsapp";
const Apply = () => {
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setShowApply(true);
      } else {
        setShowApply(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex md:px-16 px-4 bg-zinc-900 items-center justify-between fixed bottom-0 w-full z-[100000] md:py-4 py-5 transition-all ease-in-out duration-500 transform ${
          showApply ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h1 className="text-white md:text-xl text-base flex items-center justify-center ">
          Want to work with us?
          {/* <Whatsapp /> */}
        </h1>
        <div className="flex items-center gap-2">
          <Button name="Let's Talk" />
        </div>
      </div>
    </>
  );
};

export default Apply;
