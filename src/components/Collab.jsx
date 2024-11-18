import React from 'react'
import plogo from "../../public/plogo.webp";
import plogo2 from "../../public/plogo2.png";
import plogo3 from "../../public/plogo3.png";
import plogo5 from "../../public/plogo5.png";
import plogo6 from "../../public/plogo6.png";
import plogo7 from "../../public/plogo7.webp";
const Collab = () => {
  return (
    <div>
      <section className=" py-16 flex md:px-16 px-4 justify-between ">
        <div className='w-1/2'>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 capitalize">
            Collaborators We've Worked With<span className='text-blue-500'>.</span>
          </h2>
          <p>
            Partnering with industry leaders, we've collaborated with top brands
            to transform spaces, create innovative solutions, and drive
            unparalleled growth in the commercial real estate sector.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[plogo, plogo2, plogo3, plogo5, plogo6, plogo7].map(
            (client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="md:w-40 w-28"
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Collab