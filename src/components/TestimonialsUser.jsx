import React from "react";
import { FaStar } from "react-icons/fa";
import summit from "../../public/summit.png";
import workviaa from "../../public/workviaa.png";
import workvistar from "../../public/workvistar.png";
import cubi from "../../public/cubi.svg";
import { FaLinkedin } from "react-icons/fa6";

const testimonials = [
  {
    name: "Karyatshal ",
    description:
      "vineet godvani",
    // img: Karyatshal ,
  },
  {
    name: "Workdesq",
    description:
      "neeraj ghananai",
    stars: 5,
    img: cubi,
  },
  {
    name: "Worqspot ",
    description:
      "mridhulla c mohan",
    stars: 5,
    img: summit,
  },
  {
    name: "Cubispace ",
    description:
      "jatin verma",
    stars: 5,
    img: workvistar,
  },
  {
    name: "Wellwork  ",
    description:
      "tanishq mallpani",
    stars: 5,
    img: workvistar,
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-5xl capitalize w-full font-semibold text-center py-8 ">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md flex flex-col items-center"
          >
             <h1 className="text-xl font-semibold ">{testimonial.name}</h1>
             
            <p className="mt-2 text-center capitalize">{testimonial.description}</p>
            <FaLinkedin className="text-blue-500 text-2xl cursor-pointer" />

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
