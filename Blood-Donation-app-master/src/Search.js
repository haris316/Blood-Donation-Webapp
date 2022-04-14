import React, { Component } from "react";
import styled from "@emotion/styled";

const Total = styled.div`
  margin: 0;
  padding: 0;
`;
const DivHead = styled.h1`
  color: #4286f4;
  margin-top: 30px;
  margin-bottom: 60px;
`;
const DivT = styled.div`
  text-align: center;
  width: 80%;
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

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      Donors: [],
      BloodTag: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
    return (
      <Total>
        <DivT>
          <DivHead>Search People with the type of Blood you want</DivHead>
          <select
            name="state"
            id="state"
            name="BloodTag"
            value={this.state.BloodTag}
            onChange={this.handlechange}
            placeholder="BloodType"
          >
            <option value />
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          />
          <div>
            <DivButton onClick={this.submitHandler}>Search</DivButton>
          </div>
          <div>
            <ul>
              {this.state.Donors.map((arr) => (
                <div key={arr.BloodrequestID}>
                  {arr.BloodTag} {arr.Location} {arr.Cause} {arr.Dateofrequest}
                  {"    "}
                </div>
              ))}
            </ul>
          </div>
        </DivT>
      </Total>
    );
  }
}
