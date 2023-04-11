import React, { Component } from "react";

export default class TextDemo extends Component {
  render() {
    //this.props: là thuộc tính của react class component dùng để nhận giá trị từ component cha truyền vào( thẻ sử dụng thẻ này)
    let { Price, Name, Img } = this.props;
    return (
      <div className="container">
        <div className="card">
          <img src={Img} alt="" />
          <div className="card-body">
            <h3>{Name}</h3>
            <p>{Price}</p>
          </div>
        </div>
      </div>
    );
  }
}
