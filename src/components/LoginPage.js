import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <h1 className="loinghead my-4" style={{ textAlign: "center" }}>
          LoginPage
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "2px solid black",
              width: "400px",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f8f9fa",
              boxShadow: "12px 12px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column", // Stack items vertically
                alignItems: "center", // Center items horizontally
                width: "100%",
              }}
            >
              <input
                className="username"
                type="text"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "16px",
                }}
                placeholder="Username"
              />

              <input
                className="password"
                type="password"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "16px",
                }}
                placeholder="Password"
              />

              <input
                className="contact"
                type="tel"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "16px",
                }}
                placeholder="Contact Number"
              />

              <textarea
                className="address"
                spellCheck={false}
                style={{
                  width: "300px",
                  minHeight: "50px", // Minimum height
                  maxHeight: "200px", // Optional: restrict max height
                  fontSize: "16px",
                  resize: "vertical", // Allows user to resize
                  margin: "5px",
                }}
                placeholder="Enter your address..."
              ></textarea>

              <button
                className="login-btn"
                type="submit"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  fontSize: "16px",
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Login As User
              </button>

              <button
                className="login-btn"
                type="submit"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  fontSize: "16px",
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Login As Admin
              </button>

              <button
                className="login-btn"
                type="submit"
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "10px",
                  fontSize: "16px",
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Login By Google
              </button>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  margin: "10px",
                }}
              >
                <input
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                />
                Remember Me
              </label>
            </form>
          </div>
        </div>
      </>
    );
  }
}
