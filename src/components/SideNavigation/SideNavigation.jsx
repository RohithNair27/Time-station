import React, { useState } from "react";
import "./SideNavigation.css";
import personImage from "../../Assets/Images/personImage1.jpg";
import { sideNavigationConstants } from "../../constants/sideNavigationConstants";
function SideNavigation() {
  const [closed, setClosed] = useState(true);
  return (
    <>
      <div className={closed ? "navBar-body" : "navBar-body-closed"}>
        <div
          className={closed ? "button" : "button_closed"}
          onClick={() => setClosed(!closed)}
        >
          {"<"}
        </div>
        <section className="navBar-user-info">
          <img src={personImage} className="user-image" alt="image" />
          <section className="user-data">
            <span>Rohith K</span>
            <span>ID:12987</span>
          </section>
        </section>
        <section className="navBar-navLinks">
          {sideNavigationConstants.map((element) => {
            return <div>{element}</div>;
          })}
        </section>
      </div>
    </>
  );
}

export default SideNavigation;
