import React from "react";

import "./index.css";

export default function PersonalInformation() {
  return (
    <div className="personal-information">
      <h4>Personal Information</h4>
      <p>
        Age: <span className="bold-text">22 years old</span>
      </p>
      <hr />
      <p>
        Phone: <span className="bold-text">+62-8138-4567-918</span>
      </p>
      <hr />
      <p>
        Email: <span className="bold-text">bagusaldycky@gmail.com</span>
      </p>
      <hr />
    </div>
  );
}
