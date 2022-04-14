import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./AdminHead";

class UpdateUser extends Component {
  constructor(props) {
    super();
    this.state = {
      UserID: props.location.state.userid,
      UserRoleID: props.location.state.roleid,
      BloodTag: props.location.state.tag,
      Address: props.location.state.address,
      Age: props.location.state.age,
      Status: props.location.state.Status,
      FirstName: props.location.state.fname,
      LastName: props.location.state.lname,
      Gender: props.location.state.gender,
      ContactNo: props.location.state.contact,
      Email: props.location.state.email,
      Password: props.location.state.password,
      status: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async onSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:4000/updateuser", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserID: this.state.UserID,
        UserRoleID: this.state.UserRoleID,
        BloodTag: this.state.BloodTag,
        Address: this.state.Address,
        Age: this.state.Age,
        Status: this.state.Status,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Gender: this.state.Gender,
        ContactNo: this.state.ContactNo,
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    })
      .then(this.setState({ status: "true" }))
      .then(window.location.reload());
  }

  render() {
    return (
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
                <h4 className="modal-title">Update User</h4>
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
                <input type="submit" className="btn btn-info" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateUser;
