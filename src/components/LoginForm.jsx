import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      login(response.data);
      if (response.data.role === "admin") navigate("/admin");
      else if (response.data.role === "author") navigate("/author");
    } catch (error) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex  ">
      {/* Left side: Image */}
     <div className="hidden lg:flex items-center justify-center bg-cover">
  <img
    src="https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06085216/open-uri20151009-3-3y8dkm.gif"
    alt="Illustration"
    className="object-contain w-full h-full"
  />
</div>


      {/* Right side: Login Form */}
      <div className="flex items-center justify-center w-1/4 ">
        <form onSubmit={handleLogin} className="flex items-center justify-center flex-col ">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaEnvelope className="text-gray-500 mx-3" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border-none focus:outline-none rounded-r-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaLock className="text-gray-500 mx-3" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border-none focus:outline-none rounded-r-lg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
