import React, { Component } from "react";
import "./new.css";

import { Link } from "react-router-dom";
class Nav extends Component {
  state = {
    name: localStorage.getItem("username"),
  };
  render() {
    return (
      <div>
        <div>
          <nav>
            <div id="logo" style={{ color: "#FFF" }}>
              <img src="/unnamed.png" />
              BloodBank
            </div>
            <label htmlFor="drop" className="toggle">
              Menu
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Regform">Registration</Link>
              </li>
              <li>
                <Link to="/Reqform">Place Request</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
