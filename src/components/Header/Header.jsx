import React from "react";
import mindsprintLogo from "../../Assets/Images/mindsprint-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header-body">
      <section>
        <img src={mindsprintLogo} />
        <div>Time Station</div>
      </section>

      <div>Log out</div>
    </header>
  );
}

export default Header;
