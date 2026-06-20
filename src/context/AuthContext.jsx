/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Load current logged-in user from localStorage if exists
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('northstar_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Load all registered users from localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('ns_users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Keep localStorage in sync with registered users
  useEffect(() => {
    localStorage.setItem('ns_users', JSON.stringify(users));
  }, [users]);

  // Keep localStorage in sync with currentUser session
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('northstar_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('northstar_user');
    }
  }, [currentUser]);

  // Signup function
  const signup = (username, email, password) => {
    const emailExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      return { success: false, message: 'Email is already registered!' };
    }

    const newUser = { username, email, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  // Login function
  const login = (email, password) => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return { success: false, message: 'Invalid email or password!' };
    }

    setCurrentUser(user);
    return { success: true };
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
