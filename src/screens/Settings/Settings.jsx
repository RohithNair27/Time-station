import React from "react";
import "./Setting.css";
import face from "../../Assets/Images/personImage1.jpg";
function Settings() {
  return (
    <div className="setting-container">
      <span className="change-password-header">Change password</span>
      <img src={face} className="setting-image" />
      <span>Jeganmohan.G</span>
      <label for="fname"></label>
      <input
        type="password"
        id="fname"
        name="fname"
        className="setting-input"
        placeholder="Enter new password"
      ></input>
      <label for="fname"></label>
      <input
        type="password"
        id="fname"
        name="fname"
        className="setting-input"
        placeholder="re-enter password"
      ></input>
      {/* <ImageUploader
        withIcon={false}
        buttonText="Choose images"
        // onChange={this.onDrop}
        // imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      /> */}
      <span>*Set a password of atlest 8 characters</span>
      <div className="setting-submit">Change password</div>
    </div>
  );
}

export default Settings;
