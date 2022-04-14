import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>eStartup Bootstrap Template - Index</title>
          <meta content name="descriptison" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="start/assets/img/favicon.png" rel="icon" />
          <link
            href="start/assets/img/apple-touch-icon.png"
            rel="apple-touch-icon"
          />

          <link
            href="start/assets/vendor/font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
          />

          {/* Template Main CSS File */}
          <link href="start/assets/css/style.css" rel="stylesheet" />
          {/* =======================================================
  * Template Name: eStartup - v2.0.0
  * Template URL: https://bootstrapmade.com/estartup-bootstrap-landing-page-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
          {/* ======= Header ======= */}
          <Nav />
          {/* ======= Hero Section ======= */}
          <section id="hero" className="wow fadeIn">
            <div className="hero-container">
              <h1>Welcome to BloodBank</h1>
              <h2>A virtual Bloodbank to serve humanity</h2>
              <img src="start/assets/img/hero-img.png" alt="Hero Imgs" />
              <a href="/RegForm" className="btn-get-started scrollto">
                Get Started
              </a>
              <div className="btns">
                <a>
                  <i className="fa fa-apple fa-3x" /> App Store
                </a>
                <a>
                  <i className="fa fa-play fa-3x" /> Google Play
                </a>
                <a>
                  <i className="fa fa-windows fa-3x" /> windows
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
