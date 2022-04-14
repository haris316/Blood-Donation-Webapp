import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./AdminHead";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      UserRoleID: "",
      BloodTag: "",
      Address: "",
      Age: "",
      Status: "",
      FirstName: "",
      LastName: "",
      Gender: "",
      ContactNo: "",
      Email: "",
      Password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    fetch("http://localhost:4000/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserRoleID: this.state.UserRoleID,
        BloodTag: this.state.BloodTag,
        Address: this.state.Address,
        Age: this.state.Age,
        Status: this.state.Status,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Gender: this.state.Gender,
        Contact: this.state.ContactNo,
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>User</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <Link
                      to="/adminuser"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i> <span>Back</span>
                    </Link>
                  </div>
                </div>

                <div className="modal-header">
                  <h4 className="modal-title">Add User</h4>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label>UserRoleID</label>
                    <input
                      name="UserRoleID"
                      onChange={this.onChange}
                      type="number"
                      className="form-control"
                      required
                      value={this.state.UserRoleID}
                    />
                  </div>
                  <div className="form-group">
                    <label>BloodTag</label>
                    <input
                      name="BloodTag"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.BloodTag}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      name="Address"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.Address}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      name="Age"
                      onChange={this.onChange}
                      type="number"
                      className="form-control"
                      required
                      value={this.state.Age}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <input
                      name="Status"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.Status}
                    />
                  </div>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="FirstName"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.FirstName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      name="LastName"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.LastName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      name="Gender"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.Gender}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact No.</label>
                    <input
                      name="ContactNo"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.ContactNo}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="Email"
                      onChange={this.onChange}
                      type="email"
                      className="form-control"
                      required
                      value={this.state.Email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="Password"
                      onChange={this.onChange}
                      type="password"
                      className="form-control"
                      required
                      value={this.state.Password}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddUser;
