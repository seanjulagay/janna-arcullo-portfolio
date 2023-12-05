import React from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="" id="hamburger-btn">
          <img
            src="/public/images/hamburger-icon.png"
            alt=""
            className="hamburger-btn-img"
          />
        </a>
      </div>
    </div>
  );
}
