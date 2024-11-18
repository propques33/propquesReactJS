import React from "react";
import Hero from "../components/Hero.jsx";
import Marqueee from "../components/Marquee.jsx";
import Features from "@/components/Features.jsx";
import ImagePopup from "@/components/ImagePopup.jsx";
import Offer from "@/components/Offer.jsx";
import Offer2 from "@/components/Offer2.jsx";
import Profit from "@/components/Profit.jsx";
import Risk from "@/components/Risk.jsx";
import Contact from "./Contact.jsx";
import Faq from "@/components/Faq.jsx";
import Apply from "@/components/Apply.jsx";
import Impact from "../components/Impact.jsx";
import Cities from "../components/Cities.jsx";
import Revenue from "../components/Revenue.jsx";
import Collab from "../components/Collab.jsx";

const Home = () => {
  return (
    <div>
      <Hero id="home" />
      {/* <Cities /> */}
      <Apply />
      <Features id="service" />
      <Offer2 id="" />
      {/* <Offer id="" /> */}
      <Profit id="" />
      <Risk id="" />
      <Marqueee id="case" />
      <Collab  />
      <Impact />
      {/* <Revenue /> */}
      {/* <TestimonialsUser /> */}
      <ImagePopup id="about" />
      <Faq id="faq" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
