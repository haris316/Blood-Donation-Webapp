import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Nav.js";
class Loginnew extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  async submitHandler(event) {
    event.preventDefault();
    console.log(this.state.Email);
    await fetch("http://localhost:4000/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        localStorage.setItem("tok", res.token);
        localStorage.setItem("type", res.status1);
        localStorage.setItem("email", this.state.Email);
        localStorage.setItem("userid", res.a);
        localStorage.setItem("username", res.b);
      });
    if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined" &&
      localStorage.getItem("type") == "customer"
    ) {
      this.props.history.push({
        pathname: "/search",
        userEmail: this.state.Email,
      });
    } else if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined" &&
      localStorage.getItem("type") == "Admin"
    ) {
      this.props.history.push("/adminhome");
    } else if (localStorage.getItem("tok") == "undefined") {
      this.setState({ status: "Error" });
    }
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          {/* SITE TITTLE */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Small Apps</title>
          {/* PLUGINS CSS STYLE */}
          {/* Bootstrap */}
          <link
            href="yes/plugins/bootstrap/bootstrap.min.css"
            rel="stylesheet"
          />
          {/* themify icon */}
          <link
            rel="stylesheet"
            href="yes/plugins/themify-icons/themify-icons.css"
          />
          {/* Owl Carousel */}
          <link
            href="yes/plugins/owl-carousel/assets/owl.carousel.min.css"
            rel="stylesheet"
            media="screen"
          />
          {/* Owl Carousel Theme */}
          <link
            href="yes/plugins/owl-carousel/assets/owl.theme.green.min.css"
            rel="stylesheet"
            media="screen"
          />
          {/* Fancy Box */}
          <link
            href="yes/plugins/fancybox/jquery.fancybox.min.css"
            rel="stylesheet"
          />
          {/* AOS */}
          <link rel="stylesheet" href="yes/plugins/aos/aos.css" />
          {/* CUSTOM CSS */}
          <link href="yes/css/style.css" rel="stylesheet" />
          {/* FAVICON */}
          <link href="yes/images/favicon.png" rel="shortcut icon" />
          <section className="user-login section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="block">
                    {/* Image */}
                    <div className="image align-self-center">
                      <img
                        className="img-fluid"
                        src="yes/images/Login/tt.jpg"
                        alt="desk-image"
                      />
                    </div>
                    {/* Content */}
                    <div className="content text-center">
                      <div className="logo">
                        <a href="yes/homepage.html">
                          <img src="yes/images/n.jpg" alt="" />
                        </a>
                      </div>
                      <div className="title-text">
                        <h3>Sign in to To Your Account</h3>
                      </div>
                      <form action="#">
                        {/* Username */}
                        <input
                          className="form-control main"
                          type="text"
                          name="Email"
                          value={this.state.Email}
                          onChange={this.handlechange}
                          placeholder="Email"
                          required
                        />
                        {/* Password */}
                        <input
                          className="form-control main"
                          type="Password"
                          name="Password"
                          value={this.state.Password}
                          onChange={this.handlechange}
                          placeholder="Password"
                          required
                        />
                        {/* Submit Button */}
                        <button
                          className="btn btn-main-md"
                          onClick={this.submitHandler}
                        >
                          sign in
                        </button>
                      </form>
                      <div className="new-acount">
                        <a href="#">Forget your password?</a>
                        <p>
                          Don't Have an account?{" "}
                          <a href="sign-up.html"> SIGN UP</a>
                        </p>

                        {this.state.Email}
                        {this.state.Password}
                        {this.state.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* JAVASCRIPTS */}<script src="plugins/jquery/jquery.js"></script>
          <script src="plugins/popper/popper.min.js"></script>
          <script src="plugins/bootstrap/bootstrap.min.js"></script>
          <script src="plugins/owl-carousel/owl.carousel.min.js"></script>
          <script src="plugins/fancybox/jquery.fancybox.min.js"></script>
          <script src="plugins/syotimer/jquery.syotimer.min.js"></script>
          <script src="plugins/aos/aos.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgeuuDfRlweIs7D6uo4wdIHVvJ0LonQ6g"></script>
          <script src="plugins/google-map/gmap.js"></script>
          <script src="js/custom.js"></script>
          {/* google map */}
        </div>
      </div>
    );
  }
}

export default withRouter(Loginnew);
