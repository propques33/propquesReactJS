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
            localStorage.setItem("token", response.data.token);

      login(response.data); // Save user details in context
      navigate(response.data.role === "admin" ? "/admin" : "/author");
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
        <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
      </div>
    </div>
  );
};

export default LoginForm;
