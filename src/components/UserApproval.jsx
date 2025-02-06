import React, { useEffect, useState } from "react";
import axios from "axios";

const UserApproval = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const response = await axios.get("https://propques-backend-jsqqh.ondigitalocean.app/api/users/pending");
      setPendingUsers(response.data);
    } catch (error) {
      console.error("Error fetching pending users", error);
    }
  };

  const handleApproval = async (userId, approve) => {
    try {
      await axios.post(`https://propques-backend-jsqqh.ondigitalocean.app/api/users/approve/${userId}`, {
        approved: approve,
      });
      fetchPendingUsers();
    } catch (error) {
      console.error("Error approving/rejecting user", error);
    }
  };

  return (
    <div className="">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Approve Users</h2>
        {pendingUsers.length > 0 ? (
          <ul className="space-y-4">
            {pendingUsers.map((user) => (
              <li
                key={user._id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100"
              >
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleApproval(user._id, true)}
                    className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleApproval(user._id, false)}
                    className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No pending users to approve.</p>
        )}
      </div>
    </div>
  );
};

export default UserApproval;
