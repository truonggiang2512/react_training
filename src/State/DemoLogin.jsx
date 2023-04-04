import React, { Component } from "react";

export default class DemoLogin extends Component {
  // state: là thuộc tính của component để quán lý các biến thay đổi trên giao diện của 1 component
  state = {
    result: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // this.state.result = "Đăng nhập thành công!"; // Không được thay đổi state trực tiếp vì giao diện sẽ không render lại
    let newState = {
      result: "Đăng nhập thành công!",
    };
    /*
    this.setState: Là phương thức có sẵn của component. Dùng để thay đổi giá trị state,
    đồng thời làm giao diện render lại với giá trị state mới 
    */
    this.setState(newState);
  };

  render() {
    return (
      <div className="container">
        <form
          action=""
          className="card w-50 mx-auto"
          onSubmit={this.handleSubmit}
        >
          <div className="card-header bg-dark text-white text-center">
            Login
          </div>
          <div className="card-body">
            <p>Username</p>
            <input type="text" className="form-control" id="username" />
            <p>Password</p>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="card-footer text-center">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
          <div className="alert alert-success" id="result">
            <p>{this.state.result}</p>
          </div>
        </form>
      </div>
    );
  }
}
