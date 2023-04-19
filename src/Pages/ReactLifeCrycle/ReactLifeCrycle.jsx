import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      obLike: { like: 1 },
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return {};
  }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        Component life cycle:
        <h3>Number: {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <Child obLike={this.state.obLike} />
        <i
          className="fa fa-heart text-danger display-4 "
          onClick={() => {
            let newOblike = this.state.obLike;
            newOblike.like += 1;
            this.setState({
              obLike: { ...newOblike },
            });
          }}
        ></i>
      </div>
    );
  }
  timeout = {};
  componentDidMount() {
    this.timeout = setInterval(() => {
      console.log("server response");
    }, 1000);
    //call api
    console.log("componentDidMount chỉ chạy 1 lần sau render");
  }
  componentDidUpdate(prevProps, prevState) {
    //Tuyệt đối không setState khi không có điều kiện
    // this.setState({
    //     number:this.state.number + 1
    // })
    console.log(
      "componentDidUpdate chạy sau render mỗi lần state hoặc props thay đổi"
    );
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
}
