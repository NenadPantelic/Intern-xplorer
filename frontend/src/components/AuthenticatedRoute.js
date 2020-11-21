import React from "react";
import { useAuth } from "../state/contexts/AuthProvider";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = (props) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
};

export default AuthenticatedRoute;
