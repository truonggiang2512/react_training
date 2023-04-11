import React, { Component } from "react";
import { ArrayProduct } from "../../assets/Data/Data";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    let arrJSX = ArrayProduct.map((item) => {
      return (
        <div className="col-4 mt-2" key={item.id}>
          <ProductItem proInfo={item} />
        </div>
      );
    });
    return arrJSX;
  };
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center">Product List</h3>
          <div className="row">
            {this.renderProduct()}
            {/* <div className="col-4 mt-2">
              <ProductItem />
            </div>
            <div className="col-4 mt-2">
              <ProductItem />
            </div>
            <div className="col-4 mt-2">
              <ProductItem />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
