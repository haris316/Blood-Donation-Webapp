import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavUser from "./Navnew";
import "./Seac.css";

class SearchForRequests extends Component {
  constructor(props) {
    super();

    this.state = {
      userid: props.location.userEmail,
      Donors: [],
      BloodTag: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  async componentDidMount() {
    fetch("http://localhost:4000/showall", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BloodTag: this.state.BloodTag,
      }),
    })
      .then((res) => res.json())
      .then((arr) => this.setState({ Donors: arr }));
  }

  async handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    await this.submitHandler();
    await this.submitHandler();
  }
  submitHandler() {
    fetch("http://localhost:4000/show", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BloodTag: this.state.BloodTag,
      }),
    })
      .then((res) => res.json())
      .then((arr) => this.setState({ Donors: arr }));
  }
  render() {
    console.log(localStorage.getItem("email"));
    const { userEmail } = this.props.location;
    console.log(userEmail);
    return (
      <div>
        <div>
          {/*---- Include the above in your HEAD tag --------*/}
          <title>Awesome Search Box</title>
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
          {/* Coded with love by Mutiullah Samim*/}
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  name="BloodTag"
                  value={this.state.BloodTag}
                  onChange={this.handlechange}
                  type="text"
                  placeholder="Enter Blood Type"
                />
                <a
                  href="#"
                  className="search_icon"
                  onClick={this.submitHandler}
                >
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        ;
        <div
          className="d-flex justify-content-center h-100"
          style={{ padding: "0px !important" }}
        >
          <ul>
            <div className="container">
              <table
                className="table table-striped table-hover"
                style={{ "text-align": "center", tableLayout: "fixed" }}
              >
                <thead>
                  <tr style={{ "font-size": "15px" }}>
                    <th>Blood</th>
                    <th>Location</th>
                    <th>Donor Count</th>
                    <th>Blood / Components</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody
                  style={{ "font-size": "medium", padding: "0px !important" }}
                >
                  {this.state.Donors.map((arr) => (
                    <tr key={arr.BloodrequestID}>
                      <td>{arr.BloodTag}</td>
                      <td>{arr.Location}</td>
                      <td>{arr.Donorcount}</td>
                      <td>{arr.Blood_type}</td>
                      <td>
                        <Link
                          to={{
                            pathname: `/detail/${arr.BloodrequestID}`,
                            state: { userid: arr.UserID },
                          }}
                        >
                          {" "}
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchForRequests;
