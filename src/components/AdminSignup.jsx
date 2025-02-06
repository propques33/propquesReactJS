import React from "react";
import { SignUp } from "@clerk/clerk-react";

const AdminLogin = () => {
  return (
    <div className="mt-10 flex items-center w-full justify-center">
      <SignUp signUpUrl="/signin" />
    </div>
  );
};

export default AdminLogin;
