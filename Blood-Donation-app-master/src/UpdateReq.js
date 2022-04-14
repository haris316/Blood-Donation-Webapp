import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect, withRouter } from "react-router-dom";
import Header from "./AdminHead";

class UpdateReq extends Component {
  constructor(props) {
    super();

    this.state = {
      BloodrequestID: props.location.state.id,
      BloodTag: props.location.state.tag,
      Status: props.location.state.status,
      Location: props.location.state.location,
      Donorcount: props.location.state.donorcount,
      Dateofrequest: props.location.state.dateofrequest,
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
    await fetch("http://localhost:4000/updatereq", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BloodTag: this.state.BloodTag,
        Status: this.state.Status,
        Location: this.state.Location,
        Donorcount: this.state.Donorcount,
        Dateofrequest: this.state.Dateofrequest,
        BloodrequestID: this.state.BloodrequestID,
      }),
    }).then(this.setState({ status: "true" }));
    localStorage.setItem("shouldreload", "true");
  }
  render() {
    if (this.state.status === "true") {
      return <Redirect to={"/adminreq"}></Redirect>;
    }
    return (
      <div>
        <Header />
        <React.Fragment>
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
                  <h4 className="modal-title">Update Request</h4>
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
        </React.Fragment>
      </div>
    );
  }
}
export default withRouter(UpdateReq);
