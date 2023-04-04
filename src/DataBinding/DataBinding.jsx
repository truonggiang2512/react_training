import React, { Component } from "react";

const TITLE = "Docute123";
const RenderInfo = (name, age) => {
  return `Xin chào ${name} - ${age} tuổi `;
};
export default class DataBinding extends Component {
  user = {
    username: "docutevippro",
    password: "aithongminhhonhocsinhlop1",
  };
  render() {
    return (
      <div>
        <h3>{TITLE}</h3>
        <p>{RenderInfo("Đô cute", 19)}</p>
        <div className="card w-50">
          <h3 className="card-header text-center text-white bg-dark">
            {" "}
            User Info{" "}
          </h3>
          <p>Username</p>
          <input
            type="text"
            className="form-control"
            value={this.user.username}
          />
          <p>Password</p>
          <input
            type="text"
            className="form-control"
            value={this.user.password}
          />
        </div>
      </div>
    );
  }
}
