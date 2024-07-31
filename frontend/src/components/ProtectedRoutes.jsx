// src/admin/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

// A component to protect routes based on authentication status
const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in by looking for a specific key in localStorage
  const isAuthenticated = localStorage.getItem("token");

  // If the user is authenticated, render the children components (protected routes)
  // Otherwise, redirect the user to the login page
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
