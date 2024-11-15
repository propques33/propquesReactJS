import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Book from "../pages/Book.jsx";
import Contact from "../pages/Contact.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import Button from "../components/Button.jsx";
import SuccessPage from "../components/SuccessPage.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";
import TermsAndConditions from "../components/TermsAndConditions.jsx";
import Works from "../components/Works.jsx";
import Webinar from "../components/Webinar.jsx";
import Partners from "../components/Partners.jsx";
import OurService from "../components/OurService.jsx";
import Faq from "../components/Faq.jsx";
import WorkViaa from "../components/WorkViaa.jsx";
import WorkVistar from "../components/WorkVistar.jsx";
import Cubispace from "../components/Cubispace.jsx";
import SummitSpace from "../components/SummitSpace.jsx";
import NotFound from "../components/NotFound";

import Author from "../components/Author.jsx";
import BlogDetailPage from "../components/BlogDetailPage.jsx";
const Routing = () => {

  const blogPosts = [
    {
      title: 'Five alternatives to boost your coworking space revenue',
      date: 'April 15, 2024',
      comments: 'No Comments',
      image: '/path/to/image1.jpg',
      description: '...',
      slug: 'five-alternatives',
      tag: 'FEATURED'
    },
    // Add more blog entries...
  ];
  





  return (
    <>
      <Routes>
        <Route path="/form" element={<Button />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/thankyou" element={<SuccessPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/works" element={<Works />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/partners-with-us" element={<Partners />} />
        <Route path="/author/userpropques" element={<Author />} />
        <Route path="/blog/:slug" element={<BlogDetailPage blogPosts={blogPosts} />} />
        <Route path="/our-service" element={<OurService />} />
        <Route path="/workviaa" element={<WorkViaa />} />
        <Route path="/cubispace" element={<Cubispace />} />
        <Route path="/work-vistar" element={<WorkVistar />} />
        <Route path="/summit-space" element={<SummitSpace />} />
        <Route path="*" element={<NotFound />} />

        

      </Routes>
    </>
  );
};

export default Routing;