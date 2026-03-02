import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Example from "./components/Example";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/exam" element={<Example />} />
    </Routes>
  );
};

export default App;
