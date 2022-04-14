import React from "react";
import "./css/style.css";
import Pin from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="main">
          <div className="logo">
            <img src={Pin} />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="title">
          <h1>WELCOME TO OUR SCORER</h1>
        </div>
        <div className="button">
          <a href="loginPage.php" className="btn">
            LOGIN/REGISTER{" "}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
