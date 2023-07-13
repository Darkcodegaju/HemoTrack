

import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoutes;

// public routes lagane se ayadi hme private routes lagay ah ki yadi tokenh tanhi logi to jab tak token h to hm login page acdes nahi kar skte
