import React from "react";
import UserApproval from "./UserApproval";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserApproval />
      <BlogList />
      <BlogForm />
    </div>
  );
};

export default AdminDashboard;
