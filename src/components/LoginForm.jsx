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
//         "https://propques-backend-jsqqh.ondigitalocean.app/api/users/login",
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


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("author"); // 'admin' or 'author'
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine correct endpoint based on role + action
    let endpoint;
    if (userType === "admin") {
      endpoint = isSignUp
        ? "https://propques-backend-jsqqh.ondigitalocean.app/api/admin/signup"
        : "https://propques-backend-jsqqh.ondigitalocean.app/api/admin/login";
    } else {
      endpoint = isSignUp
        ? "https://propques-backend-jsqqh.ondigitalocean.app/api/author/signup"
        : "https://propques-backend-jsqqh.ondigitalocean.app/api/author/login";
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log("Response:", data);

      // If server responded with success
      if (response.ok) {
        // Example: store token & role
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.user?.role) {
          localStorage.setItem("role", data.user.role);
        }

        // Navigate to relevant dashboard
        if (data.user?.role === "admin") {
          navigate("/admin-dashboard");
        } else if (data.user?.role === "author") {
          navigate("/author-dashboard");
        } else {
          alert("Logged in, but role is not recognized.");
        }
      } else {
        alert(data.message || "Authentication failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"} ({userType})
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 rounded-md ${
              userType === "author" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setUserType("author")}
          >
            Author
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-md ${
              userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setUserType("admin")}
          >
            Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            className="w-full mb-4 p-2 border rounded-md"
            placeholder="Enter your email"
            onChange={handleInputChange}
            required
          />

          <label className="block mb-2 text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            className="w-full mb-6 p-2 border rounded-md"
            placeholder="Enter your password"
            onChange={handleInputChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle between Sign In / Sign Up */}
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
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
