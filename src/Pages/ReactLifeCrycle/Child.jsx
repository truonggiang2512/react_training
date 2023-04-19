import React, { Component } from "react";
import { PureComponent } from "react";
/*
  PureComponent là 1 class tương tự Component tuy nhiên sẽ không có lifeCycle shouldComponentUpdate.
  Thay vào đó PureComponent sẽ tự nhận biết props khi có thay đổi thì sẽ render, còn không thay đổi thì không render.
  Tuy nhiên sự so sánh props có thay đổi hay không chỉ là shallow compare (so sánh được những giá trị primitive value string,boolean,number, undefined, null).
*/
export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("this.props.like", this.props.like);
  //     console.log("newProps.like", newProps.like);
  //     if (newProps.like !== this.props.like) {
  //       return true;
  //     }
  //     return false;
  //   }

  render() {
    let { obLike } = this.props;
    console.log("child");
    return (
      <div className="bg-dark text-white p-3 display-4 mt-2">
        Child: render
        <br />
        {obLike.like}
        <i className="fa fa-heart text-white"></i>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
  componentDidUpdate() {
    //tuyet toi khong setState khi khong co dieu kien
    console.log("componentDidUpdate child");
  }
}
