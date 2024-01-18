import React from "react";

export default function ProjectDetails({
  tools = ["tools1", "tools2"],
  team = ["team1", "team2"],
  role = ["role1", "role2"],
  timeline = ["timeline1", "timeline2"],
}) {
  const projectTools = tools.map((item, index) => <li key={index}>{item}</li>);
  const projectTeam = team.map((item, index) => <li key={index}>{item}</li>);
  const projectRole = role.map((item, index) => <li key={index}>{item}</li>);
  const projectTimeline = timeline.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="project-details">
      <div className="project-details-container main-container">
        <div className="project-details-group">
          <h1 className="project-details-header text-header">Tools</h1>
          <div className="project-details-content text-content">
            {projectTools}
          </div>
        </div>
        <div className="project-details-group">
          <h1 className="project-details-header text-header">Team</h1>
          <div className="project-details-content text-content">
            {projectTeam}
          </div>
        </div>
        <div className="project-details-group">
          <h1 className="project-details-header text-header">My Role</h1>
          <div className="project-details-content text-content">
            {projectRole}
          </div>
        </div>
        <div className="project-details-group">
          <h1 className="project-details-header text-header">Timeline</h1>
          <div className="project-details-content text-content">
            {projectTimeline}
          </div>
        </div>
      </div>
    </div>
  );
}
