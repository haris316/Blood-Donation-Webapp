import React, { Component } from "react";
import styled from "@emotion/styled";
import Req from "./components/Req";
import "./Seac.css";
import axios from "axios";

const Total = styled.div`
  margin: 0;
  padding: 0;
`;
const DivHead = styled.h1`
  color: #fff;
  background: #333;
  text-align: center;
  padding: 10px;
`;
const DivT = styled.div`
  margin: 0 auto;
`;
const DivInput = styled.input`
  width: 100%;
  margin: 10px;
  padding: 18px 10px;
  border-radius: 4px;
  border: 1px solid #4e5766;
  box-shadow: 1px 0.5px #888888;
  font-size: 18px;
`;
const DivButton = styled.button`
  padding: 12px 10px;
  width: 30%;
  border-radius: 4px;
  background-color: #4286f4;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  justify-content: center;
`;

class SearchForRequest extends Component {
  state = {
    reqProfile: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/status")
      .then((res) => this.setState({ reqProfile: res.data }));
  }

  render() {
    console.log(this.state.reqProfile);
    return (
      <Total>
        <DivT>
          <DivHead>People with Uncompleted Status</DivHead>
          <div>
            <Req req={this.state.reqProfile} />
          </div>
        </DivT>
      </Total>
    );
  }
}

export default SearchForRequest;
