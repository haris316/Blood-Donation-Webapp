import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect, withRouter } from "react-router-dom";
import Header from "./AdminHead";
class UpdateEmp extends Component {
  constructor(props) {
    super();

    this.state = {
      EmpID: props.location.state.id,
      Name: props.location.state.name,
      EmpCode: props.location.state.empcode,
      Salary: props.location.state.salary,
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
    await fetch("http://localhost:4000/updateemp", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: this.state.Name,
        EmpCode: this.state.EmpCode,
        Salary: this.state.Salary,
        id: this.state.EmpID,
      }),
    }).then(this.setState({ status: "true" }));
    localStorage.setItem("shouldreload", "true");
  }
  render() {
    if (this.state.status === "true") {
      return <Redirect to={"/adminhome"}></Redirect>;
    }
    return (
      <div>
        <Header />
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <Link to="/" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons"></i> <span>Back</span>
                  </Link>
                </div>
              </div>

              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
              </div>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="Name"
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    required
                    value={this.state.Name}
                  />
                </div>
                <div className="form-group">
                  <label>EmpCode</label>
                  <input
                    name="EmpCode"
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    required
                    value={this.state.EmpCode}
                  />
                </div>
                <div className="form-group">
                  <label>Salary</label>
                  <input
                    name="Salary"
                    onChange={this.onChange}
                    type="number"
                    className="form-control"
                    required
                    value={this.state.Salary}
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
export default withRouter(UpdateEmp);
