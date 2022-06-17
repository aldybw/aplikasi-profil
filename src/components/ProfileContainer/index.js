import React from "react";
import ProfileImage from "assets/images/aldy-user.jpg";

import "./index.css";

export default function ProfileContainer() {
  return (
    <div className="profile-container">
      <img className="custom-img-profile" src={ProfileImage} alt="aldy-user" />
      <h2 className="name">Aldycky Bagus Witjaksana</h2>
      <p className="job">Software Engineer</p>
    </div>
  );
}
