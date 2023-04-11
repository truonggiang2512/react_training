import React, { Component } from "react";
import Baitapchonxe from "./Baitapchonxe";
import DemoChangeColor from "./DemoChangeColor";
import DemoChangeFontSize from "./DemoChangeFontSize";
import DemoLogin from "./DemoLogin";

export default class DemoState extends Component {
  render() {
    return (
      <div style={{ marginBottom: "400" }}>
        <DemoLogin />
        <Baitapchonxe />
        <DemoChangeFontSize />
        <hr />
        <DemoChangeColor />
      </div>
    );
  }
}
