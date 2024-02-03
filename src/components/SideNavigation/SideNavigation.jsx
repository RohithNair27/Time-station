import React from "react";
import "./SideNavigation.css";
import personImage from "../../Assets/Images/personImage1.jpg";
function SideNavigation() {
  return (
    <div className="navBar-body">
      <section className="navBar-user-info">
        <img src={personImage} className="user-image" alt="image" />
        <span>Rohith</span>
        <span>ID:12987</span>
      </section>
      <div>Dashboard</div>
      <div>Attendace</div>
    </div>
  );
}

export default SideNavigation;
