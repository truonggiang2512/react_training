import React, { Component } from "react";

export default class Baitapchonxe extends Component {
  state = {
    srcCar: "./img/products/black-car.jpg",
  };
  handleChangeColor = (color) => {
    this.setState({
      srcCar: `./img/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập chọn xe</h3>
        <div className="row">
          <div className="col-4">
            <img src={this.state.srcCar} className="w-100" alt="" />
          </div>
          <div className="col-8">
            <button
              className="btn mx-2 btn-dark"
              onClick={() => {
                this.handleChangeColor("black");
              }}
            >
              {" "}
              Black
            </button>
            <button
              className="btn mx-2 btn-danger"
              onClick={() => {
                this.handleChangeColor("red");
              }}
            >
              Red Car
            </button>
            <button
              className="btn mx-2 btn-light"
              onClick={() => {
                this.setState({ srcCar: "./img/products/steel-car.jpg" });
              }}
            >
              Steel Car
            </button>
            <button
              className="btn mx-2 btn-secondary"
              onClick={() => {
                this.setState({ srcCar: "./img/products/silver-car.jpg" });
              }}
            >
              Silver Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
