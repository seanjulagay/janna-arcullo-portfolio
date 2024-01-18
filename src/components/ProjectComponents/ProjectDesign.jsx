import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectDesign({
  uiDesign = "PlaceholderDesign",
  uiDesignImg,
  uiDesignImgText,
}) {
  const uiDesignImgPath = `/images/projects/${uiDesignImg}`;

  console.log(uiDesignImgPath);

  return (
    <div className="project-design">
      <div className="project-design-container main-container">
        <div className="project-design-text-container text-container">
          <h1 className="project-design-header text-header">UI Design</h1>
          <span className="project-design-content text-content">
            <ReactMarkdown>{uiDesign}</ReactMarkdown>
          </span>
        </div>
        <div className="project-design-img-container">
          <img src={uiDesignImgPath} alt="" className="project-design-img" />
          <span className="project-design-img-text text-content img-text">
            {uiDesignImgText}
          </span>
        </div>
      </div>
    </div>
  );
}
