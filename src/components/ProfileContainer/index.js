import React from "react";

import "./index.css";

export default function ProfileContainer() {
  const urlProfileImage =
    "https://storage.googleapis.com/profile_app_images/aldy-user.jpg";
  return (
    <div className="profile-container">
      <img
        className="custom-img-profile"
        src={urlProfileImage}
        alt="aldy-user"
      />
      <h2 className="name">Aldycky Bagus Witjaksana</h2>
      <p className="job">Software Engineer</p>
    </div>
  );
}
