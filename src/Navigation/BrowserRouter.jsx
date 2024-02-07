import React from "react";
// import { Route, Router } from "react-router";
import Login from "../screens/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Attendance from "../screens/Attendace/Attendace";
import Settings from "../screens/Settings/Settings";
import Dashboard from "../screens/Dashboard/Dashboard";
function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route
            path="/"
            element={
              <>
                <Header />
                <SideNavigation />
                <Attendance />
              </>
            }
          /> */}
          {/* <Route
            path="/"
            element={
              <>
                <Header />
                <Settings />
                <SideNavigation />
              </>
            }
          /> */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
                <SideNavigation />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
