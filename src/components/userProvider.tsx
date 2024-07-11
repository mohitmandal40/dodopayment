import React, { createContext, useState, useContext } from "react";

export interface User {
  name: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  setUserDetails: (userData: User | null) => void;
  updateUserDetails: (updatedUser: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserDetails = (userData: User | null) => {
    setUser(userData);
  };

  const updateUserDetails = (updatedUser: Partial<User>) => {
    if (!user) return;
    setUser({ ...user, ...updatedUser });
  };

  const value: UserContextType = {
    user,
    setUserDetails,
    updateUserDetails,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
