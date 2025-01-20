import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // State for the username
  const [password, setPassword] = useState(""); // State for the password
  const [error, setError] = useState(""); // State for error messages

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (username === "admin" && password === "1234") {
      // Redirect to Testimonials page (manually)
      window.location.href = "#testimonials";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
