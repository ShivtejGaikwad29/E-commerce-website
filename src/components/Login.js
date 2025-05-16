import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Login Data:", user);
  
    try {
      const response = await axios.post("http://localhost:8080/login", user);
      console.log("Login Successful:", response.data);
      // Store JWT token in localStorage
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      // Check if error.response is available before accessing it
      console.error("Login Failed:", error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
