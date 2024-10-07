import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { BsWhatsapp } from "react-icons/bs";
import { ModalProvider } from "./ModalContext.jsx"; // Modal Context Provider
import ModalForm from "./components/ModalForm.jsx"; // The form modal component
import Button from "./components/Button";
import wh from '../public/wh.png'
function App() {
  return (
    <>
      <div className="tracking-tighter relative">
        <ModalProvider>
          <ModalForm /> {/* Modal form that is globally accessible */}
          <Navbar />
          <Routing />
          <Footer />
          {/* <img src={wh} className="absolue md:bottom-16 md:right-16 bottom-12 right-2 md:h-20 h-16   text-green-600 fixed text-6xl" /> */}
        </ModalProvider>
      </div>
    </>
  );
}

export default App;
