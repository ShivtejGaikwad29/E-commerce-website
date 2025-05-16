import React, { Component } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa"; 

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ color: "#007bff", fontWeight: "bold" }}
            >
              Krushna E-super Bazar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Left side: Grocery & Stationery */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/grocery"
                  >
                    <b>GROCERY</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/stationary"
                    style={{ color: "black" }}
                  >
                    <b>STATIONARY</b>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link "
                    href="/LoginPage"
                    style={{ color: "black" }}
                  >
                    <b>LOGIN</b>
                  </a>
                </li>
              </ul>

              {/* Right side: Home, About, Contact */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                     <FaHome size={16} />
                    <b> HOME</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    style={{ color: "black" }}
                  >
                    <FaInfoCircle size={16} />
                    <b> ABOUT</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/contact"
                    style={{ color: "black" }}
                  >
                    <FaPhone size={16} />
                    <b> CONTACT</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
