import React, { Component } from "react";
import Baitapchonxe from "./Baitapchonxe";
import DemoLogin from "./DemoLogin";

export default class DemoState extends Component {
  render() {
    return (
      <div>
        <DemoLogin />
        <Baitapchonxe />
      </div>
    );
  }
}
