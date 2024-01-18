import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Uniqto from "./components/Projects/Uniqto.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uniqto" element={<Uniqto myPath="uniqto" />} />
    </Routes>
  );
}
