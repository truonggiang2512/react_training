import React, { Component } from "react";
import Baitapchonxe from "../State/Baitapchonxe";
import DemoPageLogin from "../State/DemoPageLogin";
import Post from "./Post";
import TextDemo from "./TextDemo";
import DemoChangeColor from "../State/DemoChangeColor";

export default class DemoProps extends Component {
  render() {
    const post1 = {
      tieuDe: "Cybersoft và những người bạn",
      noiDung: "Lorem ipsum dolor sit amet.",
    };
    const post2 = {
      tieuDe: "Học react có khó không ?",
      noiDung: "Không hề dễ =]]",
    };
    return (
      <div className="container">
        <h3>DemoProps</h3>
        <div className="w-25">
          <TextDemo
            name="Cybersoft"
            price="1000"
            img="./img/products/red-car.jpg"
          />
        </div>
        <div className="w-25 mt-2">
          <TextDemo
            name="BC FrontEnd 43"
            price="2000"
            img="./img/products/black-car.jpg"
          />
        </div>
        <hr />
        <h3>Danh sách bài viết</h3>
        <Post info={post1} TheBaiTap={Baitapchonxe}>
          <div className="alert alert-success">ghi chú 1</div>
        </Post>

        <Post info={post2} TheBaiTap={DemoChangeColor}>
          <div className="alert alert-danger">ghi chú 2</div>
        </Post>
      </div>
    );
  }
}
