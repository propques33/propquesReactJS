import React, { createContext, useContext, useState } from "react";

// Create the context
const ModalContext = createContext();

// Export the custom hook for accessing the context
export const useModal = () => useContext(ModalContext);

// Create the Modal Provider
export const ModalProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  console.log("Modal is open?", isFormOpen); // Log to check if state is changing

  return (
    <ModalContext.Provider value={{ isFormOpen, toggleForm }}>
      {children}
    </ModalContext.Provider>
  );
};
