import React, { useEffect } from 'react';
import { FaRegLightbulb, FaSearch, FaPenAlt, FaThumbsUp } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { BiBuildingHouse } from 'react-icons/bi';
import partner4 from '../../public/partner4.webp';
import partner6 from '../../public/partner6.webp';
import blogbanner from '../../public/blog-banner.webp'
const AboutUs = () => {
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
    <div className="font-sans">
      {/* Hero Section */}

      <section className=" text-wite px-6 md:pt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">
              Join us as we set out on your quest toward a versatile workspace
            </h1>
            <p className="text-lg">
              We aim to offer spaces that inspire, empower, and elevate your
              journey.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <img
              src={blogbanner}
              alt="Workspace Optimization"
              className="w-full rounded-lg shadowlg"
            />
          </div>
        </div>
      </section>
      {/* <section className="bg-white flex py-16 px-4 md:px-8 lg:px-16 ">
        <div className='w-1/2'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join us as we set out on your quest toward a versatile workspace
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            We aim to offer spaces that inspire, empower, and elevate your
            journey.
          </p>
        </div>
        <div>
          <img
            src={blogbanner}
            alt="Workspace Optimization"
            className="w-full rounded-lg shadowlg"
          />
        </div>
      </section> */}

      {/* Intro Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <FaRegLightbulb className="text-5xl md:text-6xl mx-auto mb-4 text-blue-500" />
          <h2 className="text-lg md:text-xl font-semibold">Who We Are</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Propques offers workspace solutions designed to modify, adapt, and
            meet the demands of modern businesses.
          </p>
        </div>
        <div className="text-center">
          <FaSearch className="text-5xl md:text-6xl mx-auto mb-4 text-blue-500" />
          <h2 className="text-lg md:text-xl font-semibold">What We Do</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Providing specialized programs and tactics that will help you grow,
            and prosper in the coworking space industry.
          </p>
        </div>
        <div className="text-center">
          <FaPenAlt className="text-5xl md:text-6xl mx-auto mb-4 text-blue-500" />
          <h2 className="text-lg md:text-xl font-semibold">Our Process</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our strategy entails assessing your current working style and
            corporate objectives to construct a functional and effective
            workplace.
          </p>
        </div>
      </section>

      {/* Business Overview */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-32 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Know Our Story
        </h2>
        <p className="text-gray-700 text-center mb-8 text-sm md:text-xl">
          Creating Sustainable Coworking Brands with Asset Owners at the Core
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-cover">
          <div className="space-y-4 text-sm md:text-base">
            <p className="text-gray-600">
              Two friends, while working for a coworking startup, realized
              during the COVID-19 pandemic that the key to a sustainable
              coworking business lies with asset owners. By generating
              additional revenue for asset owners, more coworking brands can
              thrive—even in challenging times. This inspired the creation of
              Propques, India’s only coworking consultancy dedicated to helping
              asset owners start, manage, and grow their coworking journey. Our
              goal is to empower asset owners to build sustainable coworking
              spaces that remain resilient, no matter what the market brings.
            </p>
            {/* <p className="text-gray-600">
              Our widely used platform makes coworking simple, adaptable, and
              responsive while workplaces are customized to meet the specific
              requirements of established and expanding enterprises. Our team of
              experts has a reputation for creating unique solutions that let
              clients maximize their potential and revenues.
            </p> */}
          </div>
          <img
            src={partner4}
            alt="Coworking space"
            className="w-full md:px-8 bg-cover rounded-md h-72"
          />
        </div>
      </section>

      {/* Revolution Ideology */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Revolutionary Ideology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={partner6} alt="Revolution ideology" className="w-full rounded-md" />
          <p className="text-gray-600 text-sm md:text-base">
            We develop our coworking spaces with a forward-thinking approach, incorporating eco-friendly solutions and well-structured designs that cater to the modern professional.
          </p>
        </div>
      </section> */}

      {/* Process Section */}
      <section className=" py-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold">Discover</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Understanding your needs and mapping out a plan for optimal space
              utilization.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold">Plan</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Creating detailed strategies to meet your workspace goals
              effectively.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold">Deliver</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Executing the plan with precision and ensuring seamless
              integration.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 bg-gray-100 px-4 md:px-8 lg:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Perks with Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <MdOutlineBusinessCenter className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold">
              Future Proof on ROI
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              To reduce productivity loss and maximize ROI, our process places a
              strong emphasis on design.
            </p>
          </div>
          <div className="text-center">
            <HiOutlineUsers className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold">Efficient Team</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We construct spaces with the prospect of evolution, whether you're
              making plans for two, five, or ten years in the future.
            </p>
          </div>
          <div className="text-center">
            <BiBuildingHouse className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold ">
              Industry Experience
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Our strategy enables you to attract and retain talent by
              prioritizing the end-users of the space.
            </p>
          </div>
          {/* <div className="text-center">
            <FaThumbsUp className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold capitalized">industry experience</h3>
            <p className="text-gray-600 text-sm md:text-base">
              To reduce expenses, we merge our design and strategy into a single framework.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
