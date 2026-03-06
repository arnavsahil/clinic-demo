import React, { useState } from "react";
import axios from "axios";

const AdminAuth = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://clinic-backend-2kz2.onrender.com/admin",
        { username, password },
        { withCredentials: true }
      );

      handleLogin(res.data);

      setUsername("");
      setPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#F9F8F5] flex items-center justify-center">
      <div className="bg-[#F9F8F5] border border-white w-80 py-8 px-6 rounded-xl shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)]">

        <h4 className="font-serif text-2xl md:text-4xl mb-6">Log In</h4>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
            USERNAME
          </label>

          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-3 bg-[#FCFBFA] rounded-lg border border-[#bdc0bf] w-full focus:outline-none focus:ring-2 focus:ring-[#365345]"
          />

          <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
            PASSWORD
          </label>

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-3 bg-[#FCFBFA] rounded-lg border border-[#bdc0bf] w-full focus:outline-none focus:ring-2 focus:ring-[#365345]"
          />

          <button
            type="submit"
            disabled={loading}
            className="text-white p-3 rounded-xl font-semibold bg-[#365345] w-full mt-3 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminAuth;