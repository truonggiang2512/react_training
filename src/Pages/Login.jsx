import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <h3>login</h3>
        <div className="form-group">
          <p>username</p>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <p>password</p>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-success"> login</button>
        </div>
      </div>
    );
  }
}
