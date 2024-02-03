import React from "react";
import Header from "../../components/Header/Header";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Filter from "../../components/Filter/Filter";
import "./Attendace.css";
import Table from "../../components/Table/Table";
function Attendace() {
  return (
    <div className="Attendance-container">
      <Header />
      <body className="Attendance-body">
        <SideNavigation />

        <div className="employee-details">
          <span>My employee</span>
          <Filter />
          <Table />
        </div>
      </body>
    </div>
  );
}

export default Attendace;
