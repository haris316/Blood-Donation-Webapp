import React, { Component } from "react";
import PropTypes from "prop-types";

class ReqProf extends Component {
  render() {
    const { BloodrequestId, BloodTag, Location, Donorcount } = this.props.prof;
    return (
      <div style={reqView}>
        <p>
          {}
          {"    "}
          {BloodrequestId} {BloodTag} {Location} {Donorcount}
        </p>
      </div>
    );
  }
}

const reqView = {
  padding: "10px",
  backgroundColor: "#f4f4f4",
};

export default ReqProf;
