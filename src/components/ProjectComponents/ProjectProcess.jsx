import React from "react";

export default function ProjectProcess({
  designProcess = ["process1", "process2"],
}) {
  const processes = designProcess.map((item, index) => (
    <div className="project-process-item" key={index}>
      <div className="project-process-count">
        <span className="project-process-count-number">{index + 1}</span>
      </div>
      <div className="project-process-step">{item}</div>
    </div>
  ));

  return (
    <div className="project-process">
      <div className="project-process-container main-container">
        <div className="project-process-header">Design Process</div>
        <div className="project-process-items-container">{processes}</div>
      </div>
    </div>
  );
}
