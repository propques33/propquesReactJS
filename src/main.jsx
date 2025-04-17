import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>

  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
  </HelmetProvider>

);
