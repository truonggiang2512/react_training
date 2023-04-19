import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export default class ReactFormDemo extends Component {
  state = {
    arrProduct: [
      {
        id: "01",
        name: "Iphone X",
        price: 1000,
        type: "Phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "Điện thoại iphonex",
      },
      {
        id: "02",
        name: "Iphone XR",
        price: 2000,
        type: "Phone",
        img: "https://i.pravatar.cc?u=3",
        desc: "Điện thoại iphoneXR",
      },
    ],
    productEdit: [
      {
        id: "",
        name: "",
        price: 0,
        type: "",
        img: "",
        desc: "",
      },
    ],
  };

  addProduct = (prodInfo) => {
    console.log(prodInfo);
    this.state.arrProduct.push(prodInfo);

    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  delProduct = (proId) => {
    let indexDel = this.state.arrProduct.findIndex((pro) => pro.id === proId);
    if (indexDel !== -1) {
      this.state.arrProduct.splice(indexDel, 1);
    }
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  updateProduct = (newProduct) => {
    let prod = this.state.arrProduct.find(
      (prod) => prod.idProduct == newProduct.idProduct
    );
    if (prod) {
      for (let key in prod) {
        prod[key] = newProduct[key];
      }
    }
    //Set State sau khi cập nhật
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  render() {
    return (
      <div>
        <CreateProduct
          updateProduct={this.updateProduct}
          productEdit={this.state.productEdit}
          addProduct={this.addProduct}
        />

        <table className="table mt-2">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>id</th>
              <td>name</td>
              <th>img</th>
              <th>price</th>
              <th>type</th>
              <th>desc</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img
                      src={prod.img}
                      width={50}
                      height={50}
                      alt={prod.name}
                    />
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.desc}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        this.setState({
                          productEdit: prod,
                        });
                      }}
                      className="btn btn-success mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        this.delProduct(prod.id);
                      }}
                      className="btn btn-danger"
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
