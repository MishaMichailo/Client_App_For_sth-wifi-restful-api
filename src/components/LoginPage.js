import React, { useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from 'react-router-dom';
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('auth', {
        username,
        password,
      });
      console.log(response);
      login(response.data.access_token);
      setLoggedIn(true);
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/mainPage" />;
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Sign in</h2>
        <p>Sign in to start monitoring what is going on around you</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;