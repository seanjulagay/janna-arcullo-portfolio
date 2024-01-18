import React from "react";
import {
  ProjectHeader,
  ProjectOverview,
  ProjectDetails,
  ProjectProcess,
  ProjectDesign,
  ProjectPalette,
  ProjectLearnings,
} from "../ProjectComponents";
import projects from "../../data/projects.json";

export default function Uniqto({ myPath = "PlaceholderPath" }) {
  let pathIndex = projects.findIndex((project) => project.path === myPath);

  const myProject = projects[pathIndex];

  // Destructure the keys so one can reference using (title) instead (myProject.title) or (overview) instead of (myProject.sections.overview)
  const {
    title,
    description,
    image,
    hoverImage,
    path,
    sections: {
      overview,
      problem,
      solution,
      tools,
      team,
      role,
      timeline,
      designProcess,
      uiDesign,
      uiDesignImg,
      previewImages,
      paletteFont,
      paletteFontImg,
      learnings,
    },
  } = myProject;

  return (
    <div className="uniqto">
      <div className="uniqto-container">
        <ProjectHeader title={title} description={description} image={image} />
        <ProjectOverview overview={overview} />
        <ProjectDetails
          tools={tools}
          team={team}
          role={role}
          timeline={timeline}
        />
        <ProjectProcess designProcess={designProcess} />
        <ProjectDesign
          uiDesign={uiDesign}
          uiDesignImg={uiDesignImg}
          uiDesignImgText="Landing page"
        />
        <ProjectPalette
          paletteFont={paletteFont}
          paletteFontImg={paletteFontImg}
          paletteFontImgText="Uniqto's color palette"
        />
        <ProjectLearnings learnings={learnings} />
      </div>
    </div>
  );
}
