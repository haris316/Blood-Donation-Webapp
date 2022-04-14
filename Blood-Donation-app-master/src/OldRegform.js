import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Navbar from "./Nav";
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
      }),
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        {/* Required meta tags*/}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Colorlib Templates" />
        <meta name="author" content="Colorlib" />
        <meta name="keywords" content="Colorlib Templates" />
        {/* Title Page*/}
        <title>Au Register Forms by Colorlib</title>
        {/* Icons font CSS*/}
        <link
          href="/CCD/vendor/mdi-font/css/material-design-iconic-font.min.css"
          rel="stylesheet"
          media="all"
        />
        <link
          href="/CCD/vendor/font-awesome-4.7/css/font-awesome.min.css"
          rel="stylesheet"
          media="all"
        />
        {/* Font special for pages*/}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        {/* Vendor CSS*/}
        <link
          href="/CCD/vendor/select2/select2.min.css"
          rel="stylesheet"
          media="all"
        />
        <link
          href="/CCD/vendor/datepicker/daterangepicker.css"
          rel="stylesheet"
          media="all"
        />
        {/* Main CSS*/}
        <link href="/CCD/css/main.css" rel="stylesheet" media="all" />
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div className="wrapper wrapper--w680">
            <div className="card card-4">
              <div className="card-body">
                <h2 className="title">Registration Form</h2>
                <form onSubmit={this.submitHandler}>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">First Name</label>
                        <input
                          className="input--style-4"
                          type="text"
                          name="FirstName"
                          value={this.state.FirstName}
                          onChange={this.handlechange}
                        />
                      </div>
                    </div>

                    <div className="col-2">
                      <div className="input-group">
                        <div className="p-t-10">
                          <label for="BloodTag">Choose a Blood Type: </label>
                          <label className="radio-container">
                            A+
                            <input
                              type="radio"
                              name="BloodTag"
                              value="A+"
                              checked={this.state.BloodTag === "A+"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                          </label>
                          <br></br>
                          <label className="radio-container">
                            A-
                            <input
                              type="radio"
                              name="BloodTag"
                              value="A-"
                              checked={this.state.BloodTag === "A-"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                            <br></br>
                          </label>
                          <label className="radio-container">
                            B+
                            <input
                              type="radio"
                              name="BloodTag"
                              value="B+"
                              checked={this.state.BloodTag === "B+"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                            <br></br>
                          </label>
                          <label className="radio-container">
                            B-
                            <input
                              type="radio"
                              name="BloodTag"
                              value="B-"
                              checked={this.state.BloodTag === "B-"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                            <br></br>
                          </label>
                          <label className="radio-container">
                            AB+
                            <input
                              type="radio"
                              name="BloodTag"
                              value="AB+"
                              checked={this.state.BloodTag === "AB+"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                            <br></br>
                          </label>
                          <label className="radio-container">
                            AB-
                            <input
                              type="radio"
                              name="BloodTag"
                              value="AB-"
                              checked={this.state.BloodTag === "AB-"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                            <br></br>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Phone Number</label>
                        <div className="input-group-icon">
                          <input
                            className="input--style-4"
                            type="tel"
                            name="ContactNo"
                            value={this.state.ContactNo}
                            onChange={this.handlechange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Gender</label>
                        <div className="p-t-10">
                          <label className="radio-container m-r-45">
                            Female
                            <input
                              type="radio"
                              name="Gender"
                              value="F"
                              checked={this.state.Gender === "F"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                          </label>
                          <label className="radio-container">
                            Male
                            <input
                              type="radio"
                              name="Gender"
                              value="M"
                              checked={this.state.Gender === "M"}
                              onChange={this.handlechange}
                            />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Email</label>
                        <input
                          className="input--style-4"
                          type="email"
                          name="Email"
                          value={this.state.Email}
                          onChange={this.handlechange}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Password</label>
                        <input
                          className="input--style-4"
                          type="Password"
                          name="Password"
                          value={this.state.Password}
                          onChange={this.handlechange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-t-15">
                    <button
                      className="btn btn--radius-2 btn--blue"
                      type="button"
                      onClick={this.submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Regform);
