import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Book from "../pages/Book.jsx";
import Contact from "../pages/Contact.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import Button from "../components/Button.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<Button />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
};

export default Routing;