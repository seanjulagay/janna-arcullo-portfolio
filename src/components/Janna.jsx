import React from "react";

export default function Janna() {
  return (
    <div className="janna">
      <div className="janna-container">
        <div className="janna-container-main">
          <img src="/images/janna-arcullo.png" alt="" className="janna-image" />
          <h1 className="janna-name">Janna Arcullo</h1>
          <h2 className="janna-title">UI/UX designer</h2>
          <div className="janna-socials">
            <a href="" className="janna-socials-link">
              <img
                src="/images/icons/facebook-icon.png"
                alt=""
                className="janna-socials-img"
              />
            </a>
            <a href="" className="janna-socials-link">
              <img
                src="/images/icons/linkedin-icon.png"
                alt=""
                className="janna-socials-img"
              />
            </a>
            <a href="" className="janna-socials-link">
              <img
                src="/images/icons/dribbble-icon.png"
                alt=""
                className="janna-socials-img"
              />
            </a>
            <a href="" className="janna-socials-link">
              <img
                src="/images/icons/uxcel-icon.png"
                alt=""
                className="janna-socials-img"
              />
            </a>
          </div>
          <span className="janna-desc">
            I'm a dedicated UI/UX designer and Computer Science graduate,
            specializing in Game Development. Having contributed to a tech
            company in the Philippines, I'm eager to channel my skills and
            creativity into creating impactful and user-friendly designs within
            the IT field.
          </span>
        </div>
        <div className="janna-buttons-container">
          <a href="" className="janna-home-btn">
            <span className="janna-buttons-home">Home</span>
          </a>
          <a href="" className="janna-about-btn">
            <span className="janna-buttons-about">About</span>
          </a>
          <a href="" className="janna-contact-btn">
            <span className="janna-buttons-contact">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
