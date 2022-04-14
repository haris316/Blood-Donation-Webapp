import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Navnew";

class UpdateProfile extends Component {
    constructor(props) {
        super();
        this.state = {
          Address:"",
          Age: "",
          FirstName: "",
          Gender: "",
          ContactNo:"",
          Email: "",
          Password: "",
          UserID:localStorage.getItem("userid")
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
        await fetch("http://localhost:4000/updateprofile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Address: this.state.Address,
            Age: this.state.Age,
            FirstName: this.state.FirstName,
            Gender: this.state.Gender,
            ContactNo: this.state.ContactNo,
            Email: this.state.Email,
            Password: this.state.Password,
            UserID:this.state.UserID
          }),
        })
          .then(this.setState({ status: "true" }))
          .then(window.location.reload());
      }
    
      render() {
        return (
          <div>
                <Nav/>
            <div className="container">
              <div className="table-wrapper">
                <div className="table-title" style={{"background": "#a94442"}}>
                  <div className="row">
                    <div className="col-sm-6"  >
                      <h2>
                        Update <b>Profile</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <Link
                        to="/profile"
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i> <span>Back</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <form onSubmit={this.onSubmit}>
                  <div className="modal-body">
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

export default UpdateProfile;