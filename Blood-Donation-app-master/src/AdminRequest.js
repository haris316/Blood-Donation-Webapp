import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import AddReq from "./AddReq";
import UpdateReq from "./UpdateReq";
import Header from "./AdminHead";

class AdminRequest extends Component {
  state = { request: [] };

  async componentDidMount() {
    await axios
      .get("http://localhost:4000/adminreq")
      .then((res) => this.setState({ request: res.data }));
  }

  delete(BloodrequestID) {
    axios
      .delete(`http://localhost:4000/deladminreq/${BloodrequestID}`)
      .then((res) =>
        this.setState({
          request: [
            ...this.state.request.filter(
              (request) => request.BloodrequestID !== BloodrequestID
            ),
          ],
        })
      );
  }

  render() {
    return (
      <Route
        exact
        path="/adminreq"
        render={(props) => (
          <React.Fragment>
            <div>
              <Header />
              <div className="container">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>
                          Manage <b>Request</b>
                        </h2>
                      </div>
                      <div className="col-sm-6">
                        <Link
                          to="/adminreq/add"
                          className="btn btn-success"
                          data-toggle="modal"
                        >
                          <i className="material-icons"></i>{" "}
                          <span>Add New Request</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Request ID</th>
                        <th>Blood Tag</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Donor Count</th>
                        <th>Date of Request</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.request.map((request) => (
                        <tr key={request.BloodrequestID}>
                          <td>
                            <span className="custom-checkbox">
                              <input
                                type="checkbox"
                                id="checkbox1"
                                name="options[]"
                                defaultValue={1}
                              />
                              <label htmlFor="checkbox1" />
                            </span>
                          </td>
                          <td>{request.BloodrequestID}</td>
                          <td>{request.BloodTag}</td>
                          <td>{request.Status}</td>
                          <td>{request.Location}</td>
                          <td>{request.Donorcount}</td>
                          <td>{request.Dateofrequest}</td>
                          <td>
                            <Link
                              to={{
                                pathname: "/adminreq/update",
                                state: {
                                  id: request.BloodrequestID,
                                  tag: request.BloodTag,
                                  status: request.Status,
                                  location: request.Location,
                                  donorcount: request.Donorcount,
                                  dateofrequest: request.Dateofrequest,
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
                              onClick={this.delete.bind(
                                this,
                                request.BloodrequestID
                              )}
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
          </React.Fragment>
        )}
      />
    );
  }
}

export default AdminRequest;
