import React, { useEffect } from "react";
import ModalForm from "../components/ModalForm";
import GetInTouch from "../components/GetInTouch";
import { Helmet } from "react-helmet";
const offices = [
  {
    name: "Corporate office",
    schedule: "Mon-Sat 9:30am to 6:30pm.",
    address:
      "Naagarabhavi, Bangalore 3rd Floor, Tushar Arcade, Service Road, Bengaluru, Karnataka 560072",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62243.949334669376!2d77.48047488837838!3d12.941078413858513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e5f639beefd%3A0x8f957c7b90733adf!2sNaagarabhavi%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696669920846!5m2!1sen!2sin",
  },
  {
    name: "Indore office",
    schedule: "Mon-Sat 9:30am to 6:30pm.",
    address:
      "3, Aditya Nagar, Vishnu Puri Colony, Indore, Madhya Pradesh 452014",
  },
  {
    name: "Mumbai office",
    schedule: "Mon-Sat 9:30am to 6:30pm.",
    address:
      "Tower 4, 5, Vashi Railway Station Rd, Sector 30, Vashi, Navi Mumbai, Maharashtra 402107",
  },
  {
    name: "Lucknow office",
    schedule: "Mon-Sat 9:30am to 6:30pm.",
    address:
      "2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021",
  },
];

const Contact = () => {
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
    <div className="bg-white mt-20">
      <Helmet>
        <title>Contact Propques: Coworking Consultancy in India</title>
        <meta
          name="description"
          content="Get in touch with Propques for expert coworking consultancy and solutions in India."
        />
        <link rel="canonical" href="https://propques.com/contact-us" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have any questions? Feel free to reach out to us at our locations.
          </p>
        </div>
      </section>

      {/* Office Information Section */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - All Office Addresses */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-6">
              Our Office Locations
            </h2>
            <div className="space-y-8">
              {offices.slice(1).map((office, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <p className="text-xl font-semibold text-blue-500">
                    {office.name}
                  </p>
                  <p className="text-base text-zinc-800">{office.schedule}</p>
                  <p className="text-base font-semibold text-black">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Corporate Office Address with Map */}
          <div className="space-y-8">
            <div className="">
              <h2 className="text-3xl font-bold text-blue-500 mb-4">
                Corporate Office
              </h2>
              <p className="text-lg text-zinc-800">{offices[0].schedule}</p>
              <p className="text-lg font-semibold text-black mb-4">
                {offices[0].address}
              </p>

              {/* Google Map */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={offices[0].mapSrc}
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 rounded-lg"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corporate Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Contact;
