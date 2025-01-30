// import React, { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/login",
//         {
//           email,
//           password,
//         }
//       );

//       const { user, token } = response.data;

//       if (user.role === "admin") {
//         login({ token, user });
//         navigate("/admin");
//       } else if (user.role === "author") {
//         login({ token, user });
//         navigate("/author");
//       } else {
//         alert("Unknown role. Please contact support.");
//       }
//     } catch (error) {
//       if (error.response) {
//         alert(error.response.data.message || "Invalid login credentials");
//       } else {
//         alert("Something went wrong. Please try again later.");
//       }
//     }

//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side */}
//       {/* <div className="hidden lg:flex items-center justify-center w-2/4 bg-gray-100">
//         <img
//           src="https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06085216/open-uri20151009-3-3y8dkm.gif"
//           alt="Illustration"
//           className="object-contain w-full h-full"
//         />
//       </div> */}

//       {/* Right Side */}
//       <div className="flex items-center justify-center w-full lg:w-2/4 p-8">
//         <form onSubmit={handleLogin} className="w-full max-w-sm">
//           <h2 className="text-2xl font-bold mb-6">Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full p-2 bg-blue-500 text-white rounded"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("author"); // 'admin' or 'author'
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint =
      userType === "admin"
        ? "http://localhost:5000/api/admin/login"
        : isSignUp
        ? "http://localhost:5000/api/author/signup"
        : "http://localhost:5000/api/author/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        navigate(
          userType === "admin" ? "/admin-dashboard" : "/author-dashboard"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"} ({userType})
        </h2>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              userType === "author" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setUserType("author")}
          >
            Author
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setUserType("admin")}
          >
            Admin
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaUser className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="ml-2 w-full bg-transparent focus:outline-none"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="ml-2 w-full bg-transparent focus:outline-none"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
  