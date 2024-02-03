import React from "react";
import "./Login.css";
import workingImage from "../../Assets/Images/Working.png";
import mindsprint from "../../Assets/Images/mindsprint-logo.svg";
function Login() {
  return (
    <div className="login-body">
      <div className="login-container">
        {/* <span className="login-header">Login</span> */}
        <section className="login-header">
          <img src={mindsprint} />
          <span>Time station</span>
        </section>
        <span className="login-header-two">Enter your ID and password</span>
        <section className="login-form">
          <label for="fname"></label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="login-input"
            placeholder="Enter id"
          ></input>
          <label for="fname"></label>
          <input
            type="password"
            id="fname"
            name="fname"
            className="login-input"
            placeholder="Enter password"
          ></input>
          <div className="login-submit">Sign in</div>
        </section>
      </div>
      <img src={workingImage} className="Workingimage" />
    </div>
  );
}

export default Login;
