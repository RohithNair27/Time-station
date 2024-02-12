import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Login from "../screens/Login/Login";
function PrivateRouter() {
  const location = useLocation();
  const IS_LOGGED_IN = sessionStorage.getItem("loggedIn");
  console.log("isLoged", IS_LOGGED_IN);

  return IS_LOGGED_IN ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouter;
