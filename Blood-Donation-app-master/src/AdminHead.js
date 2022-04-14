import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={hstyle}>
      <h1>Admin Panel</h1>
      <Link to="/adminhome" style={lStyle}>
        Home
      </Link>
      <Link to="/adminreq" style={lStyle}>
        Request
      </Link>
      <Link to="/" style={lStyle} onClick={() => localStorage.clear("tok")}>
        LogOut
      </Link>
      <Link to="/adminuser" style={lStyle}>
        User
      </Link>
    </header>
  );
}
const hstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  height: "120px",
};

const lStyle = {
  color: "#fff",
  padding: "10px",
};

export default Header;
