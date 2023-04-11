import React, { Component } from "react";
import "./style.css";
// Khi import file css vào một trang js thì khi mình add trang đó vô single page thì tất cả những trang còn lại cũng ăn cái css dó
import objectStyle from "./style.module.css";
export default class StyleDemo extends Component {
  render() {
    const bg = "#999";
    return (
      <div>
        <div className="color-red"> StyleDemo</div>
        <div className={objectStyle.colorPrimary}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quod
          dolores qui. Culpa est magnam at voluptatibus, autem ut earum incidunt
          quasi soluta nobis ad quisquam aperiam aut, nisi dicta!
        </div>
        <div className={objectStyle["color-danger"]}>Lorem </div>
        <div style={{ backgroundColor: bg }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quod
          dolores qui. Culpa est magnam at voluptatibus, autem ut earum incidunt
          quasi soluta nobis ad q
        </div>
      </div>
    );
  }
}
