import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { proInfo } = this.props;

    return (
      <div className="card">
        <img src={proInfo.image} alt="" />
        <div className="card-body">
          <h3>{proInfo.name}</h3>
          <p>{proInfo.price}</p>
          <button className="btn btn-dark">
            Add to cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
