import React, { Component } from "react";

export default class DemoChangeColor extends Component {
  state = {
    colorHome: "black",
  };

  render() {
    return (
      <div>
        <div className="container">
          <i
            style={{ color: this.state.colorHome }}
            className="fa fa-home display-1"
          ></i>
          <select
            className="mt-2 form-control w-25"
            onChange={(event) => {
              let value = event.target.value;
              this.setState({
                colorHome: value,
              });
            }}
            name=""
            id=""
          >
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
        </div>
      </div>
    );
  }
}
