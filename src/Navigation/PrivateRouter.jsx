import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Login from "../screens/Login/Login";
function PrivateRouter() {
  const { IS_LOGGED_IN } = useSelector((state) => state.SignupReducer);

  return IS_LOGGED_IN ? <Outlet /> : <Login />;
}

export default PrivateRouter;
