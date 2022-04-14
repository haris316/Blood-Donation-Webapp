import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './new.css'
class Navnew extends Component {
  state={
    name:localStorage.getItem("username")
  }
  render() {
    return (
      <div>
        <div>
  <nav>
    <div id="logo" style={{color:"#FFF"}}><img src= "/unnamed.png"/>BloodBank</div>
    <label htmlFor="drop" className="toggle">Menu</label>
    <input type="checkbox" id="drop" />
    <ul className="menu">
      <li><Link to="/user">Home</Link></li>
      <li><Link to="/YourReq">Your Requests</Link></li>
      <li><Link to="/search">Blood Requests</Link></li>
      <li><Link to="/Reqform">Find Blood</Link></li>
      <li>
        {/* First Tier Drop Down */}
        <label htmlFor="drop-1" className="toggle">{this.state.name}</label>
        <Link to ="/profile">{this.state.name}</Link>
        <input type="checkbox" id="drop-1" />
        <ul>
          <li><Link to ="/updateprofile">Edit Profile</Link></li>
          <li> <Link to="/" onClick={() => localStorage.clear("tok")}>Logout</Link></li>
        </ul> 
      </li>
    </ul>
  </nav>
</div>

      </div>
    );
  }
}

export default Navnew;