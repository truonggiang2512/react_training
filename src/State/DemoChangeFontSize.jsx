import React, { Component } from "react";

export default class DemoChangeFontSize extends Component {
  state = {
    fSize: 16,
  };
  handleChangeColor = () => {};
  render() {
    return (
      <div className="container ">
        <h3>Bài tập tăng giảm font size</h3>
        <p style={{ fontSize: `${this.state.fSize}px` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores
          mollitia inventore veniam corrupti, facilis eum dicta ducimus pariatur
          vitae.
        </p>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 5,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 5,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
