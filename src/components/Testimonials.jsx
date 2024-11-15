import React from 'react';
import { FaStar } from 'react-icons/fa';
import summit from '../../public/summit.png'
import workviaa from '../../public/workviaa.png'
import workvistar from '../../public/workvistar.png'
import cubi from '../../public/cubi.svg'
const testimonials = [
  {
    name: "Workviaa",
    description: "Partnering with Propques to transform our empty commercial property in Bhavarkua, Indore, into a thriving coworking space, Karyasthal, was a fantastic experience. The team managed every detail seamlessly, from daily operations to quickly filling up our space with happy occupants. Highly recommend!",
    stars: 5,
    ManagerName: "",
    img: workviaa
  },
  {
    name: "Cubispace",
    description: "Thanks to Propques, we turned our vacant property in mahalaxmi nagar , Indore, into Workdesq, a successful coworking space. The team was instrumental in managing day-to-day operations and ensuring rapid occupancy. We couldn't be happier with their dedication and results! Recommended!",
    stars: 5,
    ManagerName: "Jatin Verma",
    img: cubi
  },
  {
    name: "Summit Space",
    description: "We couldn’t be happier with Propques for helping us convert our empty property into Workviaa, a successful coworking space in Sapna Sangeeta, Indore. Their hands-on approach to managing daily operations and securing occupancy quickly has been impressive. The entire process was seamless!",
    stars: 5,
    ManagerName: "",
    img: summit
  },
  {
    name: "Work Vistar",
    description: "Working with Propques has been a great decision. They helped us transform our commercial property in Jankipuram ,Lucknow, into Cubispace. The team's ability to manage daily tasks and fill the space with tenants so quickly is commendable. We're beyond satisfied with the outcome!",
    stars: 5,
    ManagerName: "",
    img: workvistar
  },
  
];

const Testimonial = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
     <h1 className="md:text-5xl text-3xl  capitalize w-full font-semibold text-center py-8 ">
     Spaces Owner Quotes


        
      <p className="text-center md:text-base text-sm ">Helping property owners, entrepreneurs, and real estate professionals transform and matchmake spaces into profitable coworking buisness</p>
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md flex flex-col items-center">
          <img src={testimonial.img} alt={testimonial.name} className="h-10   mb-2" />
          <h1 className="font-semibold ">{testimonial.name}</h1>
          <h1 className="font-semibold text-xl">{testimonial.ManagerName}</h1>
          <p className="mt-2 text-center">{testimonial.description}</p>
          <div className="mt-3 flex">
            {Array.from({ length: 5 }, (v, i) => (
              <FaStar 
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Testimonial;
