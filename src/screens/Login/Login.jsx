import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import workingImage from "../../Assets/Images/Working.png";
import mindsprint from "../../Assets/Images/mindsprint-logo.svg";
import {
  APP_NAME,
  ENTER_YOUR_ID_AND_PASSWORD,
} from "../../constants/PortalUiConstant";
import { useDispatch } from "react-redux";

import {
  storeAccessTokenInLocal,
  checkAcessTokenInLocal,
} from "../../utils/Authentication";
import { SHOW_HIDE_LOADER_ACTION } from "../../Redux/Common/CommonAction";
function Login() {
  const [userName, setUserNamee] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();

  const data = {
    username: userName,
    password: userPassword,
  };

  const onPressLogin = async () => {
    dispatch(SHOW_HIDE_LOADER_ACTION(true));
    const response = await fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const AuthData = await onPressLogin();

    const token = checkAcessTokenInLocal();
    if (token === null && AuthData.accessToken) {
      storeAccessTokenInLocal(AuthData.accessToken);

      navigate("/Home");
    }

    dispatch(SHOW_HIDE_LOADER_ACTION(false));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("loggedIn") &&
      checkAcessTokenInLocal() !== (null || undefined)
    ) {
      navigate("/Home");
    }
  }, []);

  return (
    <div className="login-body">
      <div className="login-container">
        <section className="login-header">
          <img src={mindsprint} />
          <span>{APP_NAME}</span>
        </section>
        <span className="login-header-two">{ENTER_YOUR_ID_AND_PASSWORD}</span>
        <form className="login-form">
          <label for="fname"></label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="login-input"
            placeholder="Enter id"
            onChange={(event) => setUserNamee(event.target.value)}
          ></input>
          <label for="fname"></label>
          <input
            type="password"
            id="fname"
            name="fname"
            className="login-input"
            placeholder="Enter password"
            onChange={(event) => setUserPassword(event.target.value)}
          ></input>
          <button className="login-submit" onClick={(event) => onSubmit(event)}>
            Sign in
          </button>
        </form>
      </div>
      <img src={workingImage} className="Workingimage" />
    </div>
  );
}

export default Login;
