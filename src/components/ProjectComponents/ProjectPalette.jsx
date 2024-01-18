import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectPalette({
  paletteFont = "PlaceholderPalette",
  paletteFontImg,
  paletteFontImgText,
}) {
  const paletteFontImgPath = `/images/projects/${paletteFontImg}`;

  return (
    <div className="project-palette">
      <div className="project-palette-container main-container">
        <div className="project-palette-text-container text-container">
          <h1 className="project-palette-header text-header">
            Color palette and font
          </h1>
          <span className="project-palette-content text-content">
            <ReactMarkdown>{paletteFont}</ReactMarkdown>
          </span>
        </div>
        <div className="project-palette-img-container">
          <img
            src={paletteFontImgPath}
            alt=""
            className="project-palette-img"
          />
          <span className="project-palette-img-text text-content img-text">
            {paletteFontImgText}
          </span>
        </div>
      </div>
    </div>
  );
}
