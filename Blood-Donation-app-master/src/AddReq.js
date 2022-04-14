import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./AdminHead";

class AddReq extends Component {
  constructor() {
    super();
    this.state = {
      BloodrequestID: "",
      BloodTag: "",
      Status: "",
      Location: "",
      Donorcount: "",
      Dateofrequest: "",
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
    fetch("http://localhost:4000/addreq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BloodrequestID: this.state.BloodRequestID,
        BloodTag: this.state.BloodTag,
        Status: this.state.Status,
        Location: this.state.Location,
        Donorcount: this.state.Donorcount,
        Dateofrequest: this.state.Dateofrequest,
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
                      Manage <b>Request</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <Link
                      to="/adminreq"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i> <span>Back</span>
                    </Link>
                  </div>
                </div>

                <div className="modal-header">
                  <h4 className="modal-title">Add Request</h4>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="modal-body">
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
                    <label>Location</label>
                    <input
                      name="Location"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      required
                      value={this.state.Location}
                    />
                  </div>
                  <div className="form-group">
                    <label>Donor Count</label>
                    <input
                      name="Donorcount"
                      onChange={this.onChange}
                      type="number"
                      className="form-control"
                      required
                      value={this.state.Donorcount}
                    />
                  </div>
                  <div className="form-group">
                    <label>Dateofrequest</label>
                    <input
                      name="Dateofrequest"
                      onChange={this.onChange}
                      type="date"
                      className="form-control"
                      required
                      value={this.state.Dateofrequest}
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
export default AddReq;
