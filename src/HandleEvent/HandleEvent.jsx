import React, { Component } from "react";
//.target dùng để truy suất ngược lại thẻ đó để có thể đổi className hay làm bất cứ tác vụ nào trên thẻ đó
export default class HandleEvent extends Component {
  HandleTag = (event) => {
    event.target.className = "btn btn-danger";
  };
  render() {
    return (
      <div className="container">
        <h3>Handle Event</h3>
        <button
          className="btn btn-success"
          onClick={(event) => {
            alert("welcome back docute");
          }}
        >
          Click me
        </button>
        <button className="btn btn-success" onClick={this.HandleTag}>
          Click me
        </button>
      </div>
    );
  }
}
