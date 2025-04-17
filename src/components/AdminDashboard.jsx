import React from "react";
import { FiLogOut } from "react-icons/fi"; // React Icon for logout
import UserApproval from "./UserApproval";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import EditBlog from "./EditBlog";

const AdminDashboard = () => {
  const handleSignOut = () => {
    // Add your sign-out logic here (e.g., clearing tokens, redirecting, etc.)
    console.log("Admin signed out");
    // Example: Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-green-600 text-white p-4 shadow-lg pt-20">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="flex items-center bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FiLogOut className="mr-2 text-lg" />
          Sign Out
        </button>
      </header>

      {/* Main Content */}
      <main className=" space-y-6">
        {/* Section: User Approval */}
       
          <BlogForm />

        {/* Section: Blog List */}
        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            Manage Blogs
          </h2>
          <BlogList />
        </section>
        {/* <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            Edit Blogs
          </h2>
          <EditBlog />
        </section> */}

        {/* Section: Blog Form */}

        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            User Approvals
          </h2>
          {/* <UserApproval /> */}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
