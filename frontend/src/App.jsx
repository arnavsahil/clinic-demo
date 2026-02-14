import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
