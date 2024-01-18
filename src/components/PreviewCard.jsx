import React from "react";
import { Link } from "react-router-dom";

export default function PreviewCard({
  title = "PlaceholderTitle",
  desc = "PlaceholderDesc",
  image,
  hoverImage,
  path = "/",
}) {
  // handle image grabbing from /public folder
  let cardImage = {
    backgroundImage: `url(/images/projects/${image})`,
  };

  // handle hover image generation
  let genHoverImage;

  if (hoverImage) {
    genHoverImage = (
      <img
        src={`/images/projects/${hoverImage}`}
        alt=""
        className="card-hover-img"
      />
    );
  }

  return (
    <Link to={path} className="preview-card-btn">
      <div className="preview-card" style={cardImage}>
        <div className="preview-card-hover">{genHoverImage}</div>
        <div className="preview-card-container">
          <div className="preview-card-text">
            <span className="card-title">{title}</span>
            <span className="card-desc">{desc}</span>
          </div>
        </div>
      </div>
    </Link>
    // <a href="" className="preview-card-btn">

    // </a>
  );
}
