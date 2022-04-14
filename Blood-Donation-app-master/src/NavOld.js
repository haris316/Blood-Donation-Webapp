import React, { Component } from 'react';

class Navold extends Component {
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
          <li><Link to="/YourReq">Login</Link></li>
          <li><Link to="/Regform">Registration</Link></li>
          <li><Link to="/Reqform">Place Request</Link></li>
        </ul>
      </nav>
    </div>
    
            </div>
        );
    }
}

export default Navold;