import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);

  const login = (token) => {
    sessionStorage.setItem('token', token);
    setAuth(true);
    navigate('/mainPage');
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};