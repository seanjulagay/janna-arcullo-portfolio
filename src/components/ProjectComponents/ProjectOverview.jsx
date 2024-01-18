import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectOverview({
  overview = "Placeholder Overview ",
}) {
  return (
    <div className="project-overview">
      <div className="project-overview-container main-container">
        <h1 className="project-overview-header text-header">Quick Overview</h1>
        <span className="project-overview-content text-content">
          <ReactMarkdown className="react-markdown">{overview}</ReactMarkdown>
        </span>
      </div>
    </div>
  );
}
