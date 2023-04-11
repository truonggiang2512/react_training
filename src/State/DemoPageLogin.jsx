import React, { Component } from "react";

export default class DemoPageLogin extends Component {
  state = {
    isLogin: false,
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <div className="">
          <div className="color-success">Hi Docute</div>
          <button
            onClick={() => {
              this.setState({
                isLogin: false,
              });
            }}
            className="btn btn-success"
          >
            Đăng xuất{" "}
          </button>
        </div>
      );
    }
    return (
      <div>
        {" "}
        <button
          onClick={() => {
            this.setState({
              isLogin: true,
            });
          }}
          className="btn btn-success"
        >
          Login
        </button>
      </div>
    );
  };
  render() {
    return (
      <div className="bg-dark text-white py-3">
        <div className="d-flex">
          <div className="w-75 text-center">
            <a href="#" className="mx-2 text-decoration-none">
              Home
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              All shoes
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              Cart
            </a>
          </div>
          <div className="text-end w-25 px-5">{this.renderLogin()}</div>
        </div>
      </div>
    );
  }
}
