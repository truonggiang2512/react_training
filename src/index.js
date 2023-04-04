import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Homecomponent/Home";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import "./index.css";
import DemoLogin from "./State/DemoLogin";
import DemoState from "./State/DemoState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Home/> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoLogin /> */}
    <DemoState />
  </div>
);
