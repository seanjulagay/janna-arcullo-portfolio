import React from "react";
import PreviewCard from "./PreviewCard";
import projects from "../data/projects.json";

export default function HomeGallery() {
  const cards = projects.map((item, index) => (
    <PreviewCard
      key={index}
      title={item.title}
      desc={item.description}
      image={item.image}
      hoverImage={item.hoverImage}
      path={item.path}
    />
  ));

  return (
    <div className="home-gallery">
      <div className="home-gallery-container">{cards}</div>
    </div>
  );
}
