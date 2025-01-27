import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; // Redirect if not logged in
  if (role && user.role !== role) return <Navigate to="/" />; // Restrict based on role

  return children;
};

export default ProtectedRoute;
