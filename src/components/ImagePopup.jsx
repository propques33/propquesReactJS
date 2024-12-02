import React, { useState } from "react";
import img1 from "../../public/t.webp";
import img2 from "../../public/a.webp";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
const ImagePopup = () => {
  const images = [
    {
      src: img1,
      name: "Swithen Thomas",
      url: "https://www.linkedin.com/in/swithenthomas?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA0UDWgB-y3yUW0VU8W9JoJ5ytGuK103Wew&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3Bf3cfe7c1-dde4-4106-8dda-70ac7a257e88",
      title: "Marketing & Branding Lead",
      description:
        "Thomas helps coworking and shared office spaces attract more people to rent their spaces. He uses special marketing plans that are made just for your space. This way, you can get more people to rent your space and make more money. Coworking is a new way of working where people work together in the same space. People like coworking because they can meet new people, have a better work-life balance, and be more productive. But, because more and more coworking spaces are being built, it’s harder to stand out.  This will help you make more money and be more successful.",
    },
    {
      src: img2,
      name: "Adarsh M. Dixit",
      title: "Flexible Workspace Specialist",
      url: "https://www.linkedin.com/in/adarsh-mohan-dixit-9815711a2?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9s3zEB42KSXWEO2K4BnW1KnX5Z77YcO-8&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3Bf3cfe7c1-dde4-4106-8dda-70ac7a257e88",
      description:
        "Adarsh aims to help as many people as possible in making their names for themselves in the flexible workspace industry. He accomplished this by drawing on my extensive industry knowledge, operational proficiency, and more than eight years of experience operating across the nation. He collaborates directly with asset owners to launch co-working spaces, creating a profitable business strategy and building a healthy shared space community.",
    },
  ];

  return (
    <>
      <h1 className="md:text-5xl text-3xl  capitalize w-full font-semibold text-center  md:py-16 py-4">
        Meet Our Founders
      </h1>
      <div className=" flex justify-evenly pb-8">
        {images.map((val, key) => {
          return (
            <div
              className="flex flex-col items-center justify-center "
              key={key}
            >
              <img
                src={val.src}
                alt=""
                className="rounded-full md:h-80 md:w-80 h-40 w-40 "
                loading="lazy"
              />
              <h1 className="md:text-2xl text-sm font-semibold mt-2">
                {val.name}
              </h1>
              <h1 className="md:text-xl text-xs font-semibold">{val.title}</h1>
              <Link to={val.url}>
                <FaLinkedin className="text-blue-500 md:text-4xl text-2xl" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagePopup;
