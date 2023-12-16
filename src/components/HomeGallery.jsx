import React from "react";
import "../styles/index.scss";
import PreviewCard from "./PreviewCard";
import projects from "../data/projects.json";

export default function HomeGallery() {
  const cards = projects.map((item, index) => {
    return (
      <PreviewCard
        key={index}
        title={item.title}
        desc={item.description}
        image={item.image}
        hoverImage={item.hoverImage}
      />
    );
  });

  console.log(projects);

  return (
    <div className="home-gallery">
      <div className="home-gallery-container">{cards}</div>
    </div>
  );
}
