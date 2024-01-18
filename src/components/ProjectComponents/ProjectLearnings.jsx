import React from "react";

export default function ProjectLearnings({
  learnings = "PlaceholderLearnings",
}) {
  return (
    <div className="project-learnings">
      <div className="project-learnings-container main-container">
        <h1 className="project-learnings-header text-header">Learnings</h1>
        <span className="project-learnings-content text-content">
          {learnings}
        </span>
      </div>
    </div>
  );
}
