import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavUser from "./Navnew";

class YourRequest extends Component {
  constructor(props) {
    super();

    this.state = {
      email: localStorage.getItem("email"),
      request: [],
    };
  }

  async componentDidMount() {
    fetch("http://localhost:4000/apnireq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: localStorage.getItem("email"),
      }),
    })
      .then((res) => res.json())
      .then((arr) => this.setState({ request: arr }));
  }

  completed(BloodrequestID) {
    console.log(BloodrequestID);
    axios.post(`http://localhost:4000/reqcomp/${BloodrequestID}`);
    window.location.reload(false);
    this.props.history.push("/YourReq");
  }

  button(status) {
    if (status === "Complete") {
      return "btn btn-success";
    } else {
      return "btn btn-warning";
    }
  }

  status(status) {
    if (status === "Complete") {
      return "Completed";
    } else {
      return "Incomplete";
    }
  }

  render() {
    console.log(localStorage.getItem("email"));
    console.log(this.state.request);
    return (
      <div>
        <div>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
          <div>
            <NavUser />
          </div>

          <h2 style={{ textAlign: "center", padding: "15px " }}>
            <b>Click on Completed if the Request has been Completed</b>
          </h2>
          <div className="d-flex justify-content-center h-100">
            <ul>
              <div className="container">
                <table
                  className="table table-striped table-hover"
                  style={{
                    "text-align": "center",
                    tableLayout: "fixed",
                    "font-size": "14px",
                  }}
                >
                  <thead>
                    <tr>
                      <th>BloodTag</th>
                      <th>Location</th>
                      <th>DonorCount</th>
                      <th>DateofRequest</th>
                      <th>BloodType</th>
                      <th>Status</th>
                      <th>Completed?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.request.map((arr) => (
                      <tr key={arr.BloodrequestID}>
                        <td>{arr.BloodTag}</td>
                        <td>{arr.Location}</td>
                        <td>{arr.Donorcount}</td>
                        <td>{arr.Dateofrequest}</td>
                        <td>{arr.Blood_type}</td>
                        <td>{arr.Status}</td>
                        <td>
                          <button
                            type="button"
                            className={this.button(arr.Status)}
                            onClick={this.completed.bind(
                              this,
                              arr.BloodrequestID
                            )}
                          >
                            {this.status(arr.Status)}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default YourRequest;
