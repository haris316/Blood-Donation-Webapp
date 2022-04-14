import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import Header from "./AdminHead";

class AdminUser extends Component {
  state = { user: [] };

  async componentDidMount() {
    await axios
      .get("http://localhost:4000/adminuser")
      .then((res) => this.setState({ user: res.data }));
  }

  delete(UserID) {
    axios.delete(`http://localhost:4000/deladminuser/${UserID}`).then((res) =>
      this.setState({
        user: [...this.state.user.filter((user) => user.UserID !== UserID)],
      })
    );
  }

  render() {
    return (
      <Route
        exact
        path="/adminuser"
        render={(props) => (
          <div>
            <Header />
            <div className="container">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>
                        Manage <b>Users</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <Link
                        to="/adminuser/add"
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i>{" "}
                        <span>Add New User</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>UserRole</th>
                      <th>BloodTag</th>
                      <th>Address</th>
                      <th>Age</th>
                      <th>Status</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Contact No.</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.user.map((user) => (
                      <tr key={user.UserID}>
                        <td>{user.UserRoleID}</td>
                        <td>{user.BloodTag}</td>
                        <td>{user.Address}</td>
                        <td>{user.Age}</td>
                        <td>{user.Status}</td>
                        <td>{user.FirstName}</td>
                        <td>{user.Gender}</td>
                        <td>{user.ContactNo}</td>
                        <td>{user.Email}</td>
                        <td>{user.Password}</td>
                        <td>
                          <Link
                            to={{
                              pathname: "/adminuser/update",
                              state: {
                                userid: user.UserID,
                                roleid: user.UserRoleID,
                                tag: user.BloodTag,
                                address: user.Address,
                                age: user.Age,
                                Status: user.Status,
                                fname: user.FirstName,
                                lname: user.LastName,
                                gender: user.Gender,
                                contact: user.ContactNo,
                                email: user.Email,
                                password: user.Password,
                              },
                            }}
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              
                            </i>
                          </Link>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                            onClick={this.delete.bind(this, user.UserID)}
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default AdminUser;
