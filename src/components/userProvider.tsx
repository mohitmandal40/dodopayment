import React, { createContext, useState, useEffect, useContext } from "react";

export interface User {
  name: string;
  email: string;
}

interface UserContextType {
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
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const setUserDetails = (userData: User | null) => {
    setUser(userData);
  };

  const updateUserDetails = (updatedUser: Partial<User>) => {
    if (!user) return;
    setUser({ ...user, ...updatedUser });
  };

  const contextValue: UserContextType = {
    user,
    setUserDetails,
    updateUserDetails,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
