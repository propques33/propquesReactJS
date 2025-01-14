import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home.jsx"));
const Book = React.lazy(() => import("../pages/Book.jsx"));
const ContactPage = React.lazy(() => import("../pages/ContactPage.jsx"));
const Shop = React.lazy(() => import("../pages/Shop.jsx"));
const About = React.lazy(() => import("../pages/About.jsx"));
const BlogList = React.lazy(() => import("../components/BlogList.jsx"));
const BlogDetails = React.lazy(() => import("../components/BlogDetails.jsx"));

const Button = React.lazy(() => import("../components/Button.jsx"));
const SuccessPage = React.lazy(() => import("../components/SuccessPage.jsx"));
const PrivacyPolicy = React.lazy(() =>
  import("../components/PrivacyPolicy.jsx")
);
const TermsAndConditions = React.lazy(() =>
  import("../components/TermsAndConditions.jsx")
);
const Works = React.lazy(() => import("../components/Works.jsx"));
const Webinar = React.lazy(() => import("../components/Webinar.jsx"));
const Partners = React.lazy(() => import("../components/Partners.jsx"));
const OurService = React.lazy(() => import("../components/OurService.jsx"));
const Faq = React.lazy(() => import("../components/Faq.jsx"));
const WorkViaa = React.lazy(() => import("../components/WorkViaa.jsx"));
const WorkVistar = React.lazy(() => import("../components/WorkVistar.jsx"));
const Workjar = React.lazy(() => import("../components/Workjar.jsx"));
const Cubispace = React.lazy(() => import("../components/Cubispace.jsx"));
const SummitSpace = React.lazy(() => import("../components/SummitSpace.jsx"));
const Sapnasangeeta = React.lazy(() => import("../components/Sapnasangeeta.jsx"));
const WorqSpot = React.lazy(() => import("../components/WorqSpot.jsx"));
const Workdesq = React.lazy(() => import("../components/Workdesq.jsx"));
const Karyasthal = React.lazy(() => import("../components/Karyasthal.jsx"));
const NotFound = React.lazy(() => import("../components/NotFound"));
const Author = React.lazy(() => import("../components/Author.jsx"));
const BlogDetailPage = React.lazy(() =>
  import("../components/BlogDetails.jsx")
);
const Routing = () => {
  const blogPosts = [
    {
      title: "Five alternatives to boost your coworking space revenue",
      date: "April 15, 2024",
      comments: "No Comments",
      image: "/path/to/image1.jpg",
      description: "...",
      slug: "five-alternatives",
      tag: "FEATURED",
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

        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/faqs" element={<Faq />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/works" element={<Works />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/partners-with-us" element={<Partners />} />
        <Route path="/author/userpropques" element={<Author />} />
        <Route
          path="/blog/:slug"
          element={<BlogDetailPage blogPosts={blogPosts} />}
        />
        <Route path="/our-service" element={<OurService />} />
        <Route path="/workviaa" element={<WorkViaa />} />
        <Route path="/worqspot" element={<WorqSpot />} />
        <Route path="/cubispace" element={<Cubispace />} />
        <Route path="/work-vistar" element={<WorkVistar />} />
        <Route path="/workjar" element={<Workjar />} />
        <Route path="/workdesq" element={<Workdesq />} />
        <Route path="/karyasthal" element={<Karyasthal />} />
        <Route path="//sapna-sangeeta-offices" element={<Sapnasangeeta />} />
        <Route path="/summit-space" element={<SummitSpace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
