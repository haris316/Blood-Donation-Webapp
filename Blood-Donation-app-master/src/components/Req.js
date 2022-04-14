import React, { Component } from "react";
import ReqProf from "./ReqProf";
import PropTypes from "prop-types";

class Req extends Component {
  render() {
    return this.props.req.map((req) => <ReqProf key={req.id} prof={req} />);
  }
}

export default Req;
