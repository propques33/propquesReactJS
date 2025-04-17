import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // "admin" or "author"

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/",
  //         {
  //           withCredentials: true, // Ensures session persistence
  //         }
  //       );
  //       console.log(response)

  //       if (response.data) {
  //         setUser(response.data.user);
  //         console.log(response.data.user);
  //         setRole(response.data.role); // Assuming backend sends role in response
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch user", error);
  //       setUser(null);
  //       setRole(null);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // ✅ Author Login
  const loginAuthor = async (email, password) => {
    try {
      const response = await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/author/login",
        { email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      setRole("author");
    } catch (error) {
      console.error("Author login failed:", error.response?.data || error);
    }
  };

  // ✅ Admin Login
  const loginAdmin = async (email, password) => {
    try {
      const response = await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/admin/login",
        { email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      setRole("admin");
    } catch (error) {
      console.error("Admin login failed:", error.response?.data || error);
    }
  };

  // ✅ Author Signup
  const signupAuthor = async (name, email, password) => {
    try {
      const response = await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/author/signup",
        { name, email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      setRole("author");
    } catch (error) {
      console.error("Author signup failed:", error.response?.data || error);
    }
  };

  // ✅ Admin Signup
  const signupAdmin = async (name, email, password) => {
    try {
      const response = await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/admin/signup",
        { name, email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      setRole("admin");
    } catch (error) {
      console.error("Admin signup failed:", error.response?.data || error);
    }
  };

  // ✅ Logout (For both Admin & Author)
  const logout = async () => {
    try {
      await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      setRole(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loginAuthor,
        loginAdmin,
        signupAuthor,
        signupAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
