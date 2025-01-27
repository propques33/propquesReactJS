import React, { useEffect, useState } from "react";
import axios from "axios";

const UserApproval = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/pending");
      setPendingUsers(response.data);
    } catch (error) {
      console.error("Error fetching pending users", error);
    }
  };

  const handleApproval = async (userId, approve) => {
    try {
      await axios.post(`http://localhost:5000/api/users/approve/${userId}`, {
        approved: approve,
      });
      fetchPendingUsers(); // Refresh the list
    } catch (error) {
      console.error("Error approving/rejecting user", error);
    }
  };

  return (
    <div>
      <h2>Approve Users</h2>
      <ul>
        {pendingUsers.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
            <button onClick={() => handleApproval(user._id, true)}>Approve</button>
            <button onClick={() => handleApproval(user._id, false)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserApproval;
