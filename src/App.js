import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing React Router
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Home component
import About from "./components/About"; // about component
import Stationary from "./components/Stationary"; // Stationary component
import Grocery from "./components/Grocery";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";

export class App extends Component {
  render() {
    return (
      <Router> 
        <Navbar /> 
        <Routes> 
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Stationary" element={<Stationary />} />
          <Route path="/grocery" element={<Grocery />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
