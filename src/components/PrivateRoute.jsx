import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("mb-token")

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
