import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (token, userObj) => {
    setUser(userObj);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function getUserRole() {
  return typeof window === "undefined" ? "" : localStorage.getItem('userRole') || "";
}
export function getTenantId() {
  return typeof window === "undefined" ? "" : localStorage.getItem('tenantId') || "";
}
