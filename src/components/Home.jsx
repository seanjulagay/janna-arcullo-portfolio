import React from "react";
import Navbar from "./Navbar";
import Janna from "./Janna";
import HomeGallery from "./HomeGallery";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <Janna />
        <HomeGallery />
      </div>
    </div>
  );
}
