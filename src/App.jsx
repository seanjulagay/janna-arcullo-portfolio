import React from "react";
import Navbar from "./components/Navbar";
import Janna from "./components/Janna";
import HomeGallery from "./components/HomeGallery";
import "./styles/index.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <Janna />
        <HomeGallery />
      </div>
    </div>
  );
}
