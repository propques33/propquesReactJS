import React from "react";
import Hero from "../components/Hero.jsx";

// const Hero = React.lazy(() => import("@/components/Hero.jsx"));


const Marqueee = React.lazy(() => import("@/components/Marquee.jsx"));
const Features = React.lazy(() => import("@/components/Features"));
const ImagePopup = React.lazy(() => import("@/components/ImagePopup"));
const Offer2 = React.lazy(() => import("@/components/Offer2"));
const Profit = React.lazy(() => import("@/components/Profit"));
const Risk = React.lazy(() => import("@/components/Risk"));
const Contact = React.lazy(() => import("./Contact"));
const Faq = React.lazy(() => import("@/components/Faq"));
const Apply = React.lazy(() => import("@/components/Apply"));
const Impact = React.lazy(() => import("@/components/Impact"));
const Collab = React.lazy(() => import("@/components/Collab"));





const Home = () => {
  return (
    <div>
      <Hero id="home" />
      {/* <Cities /> */}
      <Apply />
      <Marqueee id="case" />

      <Features id="service" />
      <ImagePopup id="about" />

      <Offer2 id="" />
      {/* <Offer id="" /> */}
      <Risk id="" />
      <Profit id="" />
      <Impact />
      {/* <Revenue /> */}
      {/* <TestimonialsUser /> */}
      <Collab />

      <Faq id="faq" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
