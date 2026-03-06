import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminAuth from "./components/AdminAuth";

const App = () => {
  const [admin, setAdmin] = useState(localStorage.getItem("admin") === "true");

  const handleLogin = () => {
    localStorage.setItem("admin", "true");
    setAdmin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    setAdmin(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          admin ? (
            <Navigate to="/admin" />
          ) : (
            <AdminAuth handleLogin={handleLogin} />
          )
        }
      />

      <Route
        path="/admin"
        element={
          admin ? (
            <AdminDashboard handleLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default App;
