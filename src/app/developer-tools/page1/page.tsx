"use client";
import React, { useState } from "react";
import { useUser } from "@/components/userProvider";

const UpdateUserComponent: React.FC = () => {
  const { user, setUserDetails } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsUpdated(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsUpdated(false);
  };

  const handleUpdateUser = () => {
    setUserDetails({ name, email });
    setIsUpdated(true);
  };

  return (
    <div>
      <h2>Update User Details</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button
        className="py-2 px-4 bg-slate-400 rounded-lg"
        onClick={handleUpdateUser}
      >
        Update
      </button>
      {isUpdated && (
        <p>User details updated! Check the Sidebar for updated Details</p>
      )}
    </div>
  );
};

export default UpdateUserComponent;
