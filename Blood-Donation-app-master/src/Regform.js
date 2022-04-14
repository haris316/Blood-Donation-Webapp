import React, { Component } from "react";
import Nav from "./Nav";

class Regform extends Component {
  constructor() {
    super();

    this.state = {
      FirstName: "",
      Gender: "",
      Email: "",
      Password: "",
      ContactNo: "",
      BloodTag: "",
      Address: "",
      Age: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submitHandler() {
    fetch("http://localhost:4000/signupp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FirstName: this.state.FirstName,
        Gender: this.state.Gender,
        Email: this.state.Email,
        Password: this.state.Password,
        ContactNo: this.state.ContactNo,
        BloodTag: this.state.BloodTag,
        Address: this.state.Address,
        Age: this.state.Age,
      }),
    });
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <Nav />
        <div>
          {/* SITE TITTLE */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Small Apps</title>
          {/* PLUGINS CSS STYLE */}
          {/* Bootstrap */}
          <link
            href="yes/plugins/bootstrap/bootstrap.min.css"
            rel="stylesheet"
          />
          {/* themify icon */}
          <link
            rel="stylesheet"
            href="yes/plugins/themify-icons/themify-icons.css"
          />
          {/* Owl Carousel */}
          <link
            href="yes/plugins/owl-carousel/assets/owl.carousel.min.css"
            rel="stylesheet"
            media="screen"
          />
          {/* Owl Carousel Theme */}
          <link
            href="yes/plugins/owl-carousel/assets/owl.theme.green.min.css"
            rel="stylesheet"
            media="screen"
          />
          {/* Fancy Box */}
          <link
            href="yes/plugins/fancybox/jquery.fancybox.min.css"
            rel="stylesheet"
          />
          {/* AOS */}
          <link rel="stylesheet" href="yes/plugins/aos/aos.css" />
          {/* CUSTOM CSS */}
          <link href="yes/css/style.css" rel="stylesheet" />
          {/* FAVICON */}
          <link href="yes/images/favicon.png" rel="shortcut icon" />
          {/*=============================
=            Sign Up            =
==============================*/}
          <section className="user-login section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="block">
                    {/* Image */}
                    <div className="image align-self-center">
                      <img
                        className="img-fluid"
                        src="yes/images/Login/pp.jpg"
                        alt="desk-image"
                      />
                    </div>
                    {/* Content */}
                    <div className="content text-center">
                      <div className="logo">
                        <a href="yes/homepage.html">
                          <img src="images/n.jpg" alt="" />
                        </a>
                      </div>
                      <div className="title-text">
                        <h3>Sign Up for New Account</h3>
                      </div>
                      <form action="#" onSubmit={this.submitHandler}>
                        {/* Username */}
                        <input
                          className="form-control main"
                          type="text"
                          name="FirstName"
                          placeholder="Your Name"
                          value={this.state.FirstName}
                          onChange={this.handlechange}
                        />
                        {/* Email */}
                        <input
                          className="form-control main"
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          value={this.state.Email}
                          onChange={this.handlechange}
                        />
                        {/* Password */}
                        <input
                          className="form-control main"
                          type="password"
                          name="Password"
                          placeholder="Password"
                          value={this.state.Password}
                          onChange={this.handlechange}
                        />
                        <input
                          className="form-control main"
                          type="Address"
                          name="Address"
                          placeholder="Your Address"
                          value={this.state.Address}
                          onChange={this.handlechange}
                        />
                        <input
                          className="form-control main"
                          type="Age"
                          name="Age"
                          placeholder="Your Age"
                          value={this.state.Age}
                          onChange={this.handlechange}
                        />
                        <input
                          className="form-control main"
                          type="tel"
                          name="ContactNo"
                          placeholder="Your Number"
                          value={this.state.ContactNo}
                          onChange={this.handlechange}
                        />

                        <p>Please select your gender:</p>
                        <input
                          type="radio"
                          name="Gender"
                          value="M"
                          checked={this.state.Gender === "M"}
                          onChange={this.handlechange}
                        />
                        <label
                          htmlFor="male"
                          style={{ "font-weight": "normal" }}
                        >
                          &nbsp;Male &nbsp; &nbsp;&nbsp;
                        </label>

                        <input
                          type="radio"
                          name="Gender"
                          value="F"
                          checked={this.state.Gender === "F"}
                          onChange={this.handlechange}
                        />
                        <label
                          htmlFor="female"
                          style={{ "font-weight": "normal" }}
                        >
                          {" "}
                          &nbsp;Female
                        </label>
                        <br></br>
                        <br></br>
                        <div include="form-input-select()">
                          <select
                            required
                            name="BloodTag"
                            value={this.state.BloodTag}
                            onChange={this.handlechange}
                          >
                            <option value hidden>
                              Blood Type
                            </option>
                            <option value={"A+"}>A+</option>
                            <option value={"A-"}>A-</option>
                            <option value={"B+"}>B+</option>
                            <option value={"B-"}>B-</option>
                            <option value={"AB+"}>AB+</option>
                            <option value={"AB-"}>AB-</option>
                            <option value={"O+"}>O+</option>
                            <option value={"O-"}>O-</option>
                          </select>
                        </div>
                      </form>

                      {/* Submit Button */}
                      <button
                        className="btn btn-main-md"
                        onClick={this.submitHandler}
                      >
                        sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* JAVASCRIPTS */}
          {/* google map */}
        </div>
      </div>
    );
  }
}

export default Regform;
