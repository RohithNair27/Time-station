import React from "react";
import mindsprintLogo from "../../Assets/Images/mindsprint-logo.svg";
import "./Header.css";
import { useNavigate } from "react-router";
import { deleteAccessToken } from "../../utils/Authentication";
function Header() {
  const Navigate = useNavigate();
  const onPressLogout = () => {
    deleteAccessToken();
    Navigate("/");
  };
  return (
    <header className="header-body">
      <section>
        <img src={mindsprintLogo} />
        <div>Time Station</div>
      </section>

      <button onClick={() => onPressLogout()}>Log out</button>
    </header>
  );
}

export default Header;
