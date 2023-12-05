import React from "react";
import "../styles/janna.scss";

export default function Janna() {
  return (
    <div className="janna">
      <div className="janna-container">
        <h1 className="janna-name">Janna Arcullo</h1>
        <h2 className="janna-title">UI/UX designer</h2>
        <div className="janna-socials">
          <a href="" className="janna-socials-link">
            <img
              src="/public/images/facebook-icon.png"
              alt=""
              className="janna-socials-img"
            />
          </a>
          <a href="" className="janna-socials-link">
            <img
              src="/public/images/linkedin-icon.png"
              alt=""
              className="janna-socials-img"
            />
          </a>
          <a href="" className="janna-socials-link">
            <img
              src="/public/images/dribbble-icon.png"
              alt=""
              className="janna-socials-img"
            />
          </a>
          <a href="" className="janna-socials-link">
            <img
              src="/public/images/uxcel-icon.png"
              alt=""
              className="janna-socials-img"
            />
          </a>
        </div>
        <span className="janna-desc">
          I'm a dedicated UI/UX designer and Computer Science graduate,
          specializing in Game Development. Having contributed to a tech company
          in the Philippines, I'm eager to channel my skills and creativity into
          creating impactful and user-friendly designs within the IT field.
        </span>
      </div>
    </div>
  );
}
