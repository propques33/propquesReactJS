import React, { useEffect } from "react";
import { FaRegLightbulb, FaSearch, FaPenAlt, FaThumbsUp } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import cubi from '../../public/cubi.svg'
import workdesq from '../../public/workdesq.png'
import workviaalogo from '../../public/workviaalogo.png'
import worqspot from '../../public/worqspot.png'
import sapna from '../../public/sapna.png'
import well from '../../public/well.png'
import summit from '../../public/summit.png'
import karyasthal from '../../public/karyasthal.png'
import siolim from '../../public/siolimAsset.png'
import elco from '../../public/elco.png'
import collab from '../../public/collab.png'
import acro from '../../public/acro.png'
import cstudio from '../../public/cstudio.png'
import desker from '../../public/desker.png'
import live from '../../public/live.png'
import dice from '../../public/dice.png'

import workjarAsset from '../../public/workjarAsset.png'
import workvistar from '../../public/workvistar.png'
import partner8 from '../../public/partner8.webp'



const Works = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="font-sans mt-20">
      {/* Hero Section */}
      <section
        className="bg-cover relative mt-20 bg-center py-32 h-80 text-white text-center flex items-center justify-center"
        style={{ backgroundImage: `url(${partner8})` }}
      >
        <div className="absolute z-20 text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-base md:text-lg">
            Enabling the workforce of the future - We are motivated by a sense
            of community in all we do, from the businesses we support to the
            spaces we build.
          </p>
        </div>
        <div className="z-10 absolute w-full h-full bg-black opacity-50 top-0" />
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Cubispace",
              description:
                "Innovative research-backed coworking space strategically located for maximum productivity.",
              icon: (
                <MdOutlineBusinessCenter className="text-4xl text-blue-500" />
              ),
              logo: cubi,
            },
            {
              name: "Worqspot",
              description:
                "Located in a prime area, this space offers a perfect blend of style and convenience, ensuring an optimal environment for your activities.",
              icon: <BiBuildingHouse className="text-4xl text-blue-500" />,
              logo: worqspot,
            },

            {
              name: "Karyasthal",
              description:
                "A boutique coworking space that offers premium facilities tailored for professionals.",
              icon: <BiBuildingHouse className="text-4xl text-blue-500" />,
              logo: karyasthal,
            },
            {
              name: "Workdesq",
              description:
                "Step into our premium coworking space in Mahalakshmi Nagar for a perfect blend of comfort and functionality.",
              icon: <BiBuildingHouse className="text-4xl text-blue-500" />,
              logo: workdesq,
            },
            {
              name: "Workviaa",
              description:
                "Achieved 100% occupancy in under 3 months, increased rental income by 1.5x.",
              icon: <FaThumbsUp className="text-4xl text-blue-500" />,
              logo: workviaalogo,
            },
            {
              name: "Sapna Sangeeta Office",
              description:
                "Discover a vibrant environment where your ideas can flourish. Sapna Sangeeta Offices blend functionality and inspiration.",
              icon: <FaBuilding className="text-4xl text-blue-500" />,
              logo: sapna,
            },
            {
              name: "WellWork",
              description:
                "Discover a vibrant environment where your ideas can flourish. Sapna Sangeeta Offices blend functionality and inspiration.",
              icon: <FaBuilding className="text-4xl text-blue-500" />,
              logo: well,
            },
            {
              name: "Summit Space",
              description:
                "Over 1.5x increase in rental rate of the corporate property. 3x increase in its occupancy rate as a premier corporate address.",
              icon: <FaBuilding className="text-4xl text-blue-500" />,
              logo: summit,
            },
            {
              name: "Work Vistar",
              description:
                "Growth in rental income of workspaces by almost 70%, increased occupancy to 90%, and complete strategic rebranding.",
              icon: <GiOfficeChair className="text-4xl text-blue-500" />,
              logo: workvistar,
            },
            {
              name: "Workjar",
              description:
                "An underperforming standalone building was refurbished into a co-working facility with increased revenue and occupancy.",
              icon: <FaBuilding className="text-4xl text-blue-500" />,
              logo: workjarAsset,
            },

            {
              name: "Siolim",
              description:
                "An unoccupied villa was transformed into an attractive office space, achieving full occupancy.",
              icon: <HiOutlineUsers className="text-4xl text-blue-500" />,
              logo: siolim,
            },

            {
              name: "ElcoSpace",
              description:
                "A coworking space focusing on entrepreneurs and collaborative growth.",
              icon: (
                <MdOutlineBusinessCenter className="text-4xl text-blue-500" />
              ),
              logo: elco,
            },
            {
              name: "Collabspace",
              description:
                "Transformed a traditional office space into a vibrant coworking environment.",
              icon: <GiOfficeChair className="text-4xl text-blue-500" />,
              logo: collab,
            },

            {
              name: "Acrospaces",
              description:
                "Refurbished an outdated building into a modern, thriving coworking space.",
              icon: <FaBuilding className="text-4xl text-blue-500" />,
              logo: acro,
            },
            {
              name: "Coworking Studio",
              description:
                "Improved occupancy by 60% and enhanced collaboration and client satisfaction.",
              icon: <HiOutlineUsers className="text-4xl text-blue-500" />,
              logo: cstudio,
            },

            {
              name: "The Dice",
              description:
                "Modernized space with creative layouts and optimal usage for startups.",
              icon: <FaRegLightbulb className="text-4xl text-blue-500" />,
              logo: dice,
            },
            {
              name: "Desker",
              description:
                "A vibrant community and premium boutique office space that achieved significant growth.",
              icon: <FaPenAlt className="text-4xl text-blue-500" />,
              logo: desker,
            },
            {
              name: "Livewire",
              description: "Enhanced and optimized space for tech startups.",
              icon: <FaSearch className="text-4xl text-blue-500" />,
              logo: live,
            },
          ].map((project, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <img src={project.logo} alt="" className="h-8" loading="lazy" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default Works;
