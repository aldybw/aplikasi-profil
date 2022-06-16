import React from "react";

import GithubLogo from "assets/images/github.png";
import LinkedInLogo from "assets/images/linkedin.png";
import TwitterLogo from "assets/images/twitter.png";

import "./index.css";

export default function Footer() {
  return (
    <footer>
      <h3>Find me in!</h3>
      <div className="social-media">
        <img src={GithubLogo} alt="" width={50} />
        <img src={LinkedInLogo} alt="" width={50} />
        <img src={TwitterLogo} alt="" width={50} />
      </div>
    </footer>
  );
}
