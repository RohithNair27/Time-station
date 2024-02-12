import React from "react";
import Login from "../screens/Login/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Attendance from "../screens/Attendace/Attendace";
import Settings from "../screens/Settings/Settings";
import Dashboard from "../screens/Dashboard/Dashboard";
import Addusers from "../screens/Addusers/Addusers";
import PrivateRouter from "./PrivateRouter";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRouter />}>
            <Route
              path="/Home"
              element={
                <>
                  <Header />
                  <SideNavigation />
                  <Attendance />
                </>
              }
            />
            <Route
              path="/setting"
              element={
                <>
                  <Header />
                  <Settings />
                  <SideNavigation />
                </>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <>
                  <Header />
                  <Dashboard />
                  <SideNavigation />
                </>
              }
            />
            <Route
              path="/addusers"
              element={
                <>
                  <Header />
                  <Addusers />
                  <SideNavigation />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
