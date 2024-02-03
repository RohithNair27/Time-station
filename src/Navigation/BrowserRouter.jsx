import React from "react";
// import { Route, Router } from "react-router";
import Login from "../screens/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from "../screens/Attendace/Attendace";
function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
