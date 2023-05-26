import React from "react";
import Nav1 from "./Units/Nav1";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Additem from "./Pages/Additem";

export default function App() {
  return (
    <div>
      <Nav1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Additem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}