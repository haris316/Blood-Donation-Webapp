import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import AdminReq from "./AdminReq";
import Ptry from "./Ptry";
import AdminReq from "./AdminReq";
import Rouute from "./Rouute";
//import SearchForRequest from "./SearchForRequest";
//import AddHospitals from "./AddHospital";
//import Reqform from "./LandingPage";
//import Search from "./Search";

ReactDOM.render(<Rouute />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
