import React from "react";

export default function ProjectHeader({
  title = "PlaceholderTitle",
  description = "PlaceholderDesc",
  image = null,
}) {
  // handle image grabbing from /public folder
  let cardImage = {
    backgroundImage: `url(/images/projects/${image})`,
  };

  return (
    <div className="project-header" style={cardImage}>
      <div className="project-header-container">
        <h1 className="project-header-title">{title}</h1>
        <h2 className="project-header-desc">{description}</h2>
      </div>
    </div>
  );
}
