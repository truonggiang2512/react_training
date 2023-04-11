import React, { Component } from "react";

export default class RenderWithMap extends Component {
  product = [
    {
      id: 1,
      name: "red car",
      price: "1000",
      img: "./img/products/red-car.jpg",
    },
    {
      id: 2,
      name: "silver car",
      price: "1000",
      img: "./img/products/silver-car.jpg",
    },
    {
      id: 3,
      name: "steel car",
      price: "1000",
      img: "./img/products/steel-car.jpg",
    },
    {
      id: 4,
      name: "black car",
      price: "1000",
      img: "./img/products/black-car.jpg",
    },
  ];
  //   renderProduct = () => {
  //     let output = []; //mảng các thẻ tr dựa trên dữ liệu của this.product
  //     for (let prod of this.product) {
  //       let jsxTr = (
  //         <tr>
  //           <td>{prod.id}</td>
  //           <td>{prod.name}</td>
  //           <td>{prod.price}</td>
  //           <td>{prod.img}</td>
  //         </tr>
  //       );
  //       //Đưa jsx tr vào mảng output
  //       output.push(jsxTr);
  //     }

  //     return output;
  //   };
  renderMapTr = () => {
    let arrJSXTr = this.product.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." style={{ width: 50 }} />
          </td>
        </tr>
      );
    });

    return arrJSXTr;
  };
  renderCardProduct = () => {
    let arrJSX = this.product.map((prod) => {
      return (
        <div className="col-3 card" key={prod.id}>
          <div className="text-center">
            <img src={prod.img} alt="..." style={{ width: 100 }} />
          </div>
          <div className="text-center d-fle ">
            <div>{prod.name}</div>
            <div>{prod.price}</div>
          </div>
        </div>
      );
    });
    return arrJSX;
  };
  render() {
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderMapTr()}</tbody>
        </table>
        <hr />
        <h3 className="text-center">Product List</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
