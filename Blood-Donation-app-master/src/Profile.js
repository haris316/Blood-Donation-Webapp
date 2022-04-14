import React, { Component } from 'react';
import Nav from "./Navnew";
import {Link} from 'react-router-dom'
class Profile extends Component {
                 constructor(props) {
    super();
    this.state = {
      id: localStorage.getItem("userid"),
      details: [],
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    console.log("hello");
    fetch("http://localhost:4000/userdetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ details: res }));
  }
  render() {
    console.log(this.state);
    return (
      <div>
          <Nav/>

      <div style={{"background-image": "url(https://img4.goodfon.ru/original/1024x1024/6/2d/oboi-1920x1080-kreativ-minimalizm-polosy-abstraktsiia-fon--1.jpg)","height":"1000px","background-position": "center", "background-repeat": "no-repeat","background-size": "cover"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            
              <div style={{ "margin-top": "20px" }}>
                <div className="col-sm-12 well profile" >
                  <div className="col-xs-12 col-sm-8">
                    <h2>
                      {this.state.details.map((arr) => (
                        <li
                          style={{ color: "#353b48", "font-size": 20,"list-style": "none","font-family": "-webkit-body"}}
                          key={arr.UserID}
                        >
                          <h1>{arr.FirstName}</h1>
                          <h2 style={{ "font-size": 25}}>
                            <strong>Age: </strong> {arr.Age}
                          </h2>
                          <h2 style={{ "font-size": 25}}>
                            <strong>Gender: </strong> {arr.Gender}
                          </h2>
                          <h2 style={{ "font-size": 25}}>
                            <strong>Address: </strong> {arr.Address}
                          </h2 >
                          <h2 style={{ "font-size": 25}}>
                            <strong>Contact: </strong> {arr.ContactNo}
                          </h2>
                          <h2 style={{ "font-size": 25}}>
                            <strong>Email: </strong> {arr.Email}
                          </h2>
                          <h2 style={{ "font-size": 25}}>
                            <strong>Password: </strong> {arr.Password}
                          </h2>
                        </li>
                      ))}
                    </h2>
                  </div>
                  <div className="col-xs-12 col-sm-4 text-center well profile">
                    <figure>
                      <img
                        src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/p960x960/45579964_2094655013912470_7262761964932169728_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=VRo4gw1qslAAX-YosYT&_nc_ht=scontent.fkhi6-1.fna&_nc_tp=6&oh=a2cf1cb1b445eee71253f11b1cc0bc2b&oe=5F04DB9F"
                        alt=""
                        className="img-circle img-responsive"
                      />
                
                
              
                    </figure>
                   
                  </div>
                  <Link to = "/updateprofile">
                  <button
                  type="button"
                  class="btn btn-danger"
                  style={{ "margin-top": "15px", alignSelf: "center" }}
                >
                  Edit Profile
                </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}



export default Profile;