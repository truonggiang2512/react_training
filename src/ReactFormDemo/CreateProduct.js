import React, { Component } from "react";
import HandleEvent from "../HandleEvent/HandleEvent";

export default class CreateProduct extends Component {
  state = {
    values: { id: "", name: "", img: "", price: "", type: "phone", desc: "" },
    errors: {
      id: "(*)",
      name: "(*)",
      img: "(*)",
      price: "(*)",
      desc: "(*)",
    },
  };

  //   Can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gán vào state
  //   Can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state
  //   static getDerivedStateFromProps(newProps, currentState) {
  //     if (newProps.productEdit.id !== currentState.values.id) {
  //       //  Bấm sửa
  //       currentState.values = { ...newProps.productEdit };
  //       return currentState;
  //     }
  //     return null;
  //   }
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.productEdit,
    });
  }

  render() {
    const HandleSubmit = (e) => {
      e.preventDefault();
      //kiem tra neu this.state.values hop le thi add react
      //duyet this.state.errors
      console.log(this.state.errors);
      for (let key in this.state.errors) {
        if (this.state.errors[key] !== "") {
          alert("du lieu nhap chua hop le ");
          return;
        }
      }

      let { addProduct } = this.props;
      //validate truoc khi them
      addProduct(this.state.values);
    };
    const HandleChangeInput = (e) => {
      //xu ly this.state.values
      let { value, id } = e.target;

      //-----------------
      let dataType = e.target.getAttribute("data-type");
      let minLength = e.target.getAttribute("data-minLength");
      let maxLength = e.target.getAttribute("data-maxLength");
      //-----------------
      let newValue = { ...this.state.values };
      newValue[id] = value;

      //xu ly error
      let newError = { ...this.state.errors };
      let messError = "";
      if (value.trim() === "") {
        messError = id + "khong duoc bo trong";
      } else {
        if (dataType) {
          switch (dataType) {
            case "number": {
              let regexNumber = /^\d+$/;
              if (!regexNumber.test(value)) {
                messError = id + " " + " phai la so !";
              }
              break;
            }
            case "string": {
              let regexString = /^[a-zA-Z ]+$/;
              if (!regexString.test(value)) {
                messError = id + " phai la ki tu !";
              }
              break;
            }
          }
        }
      }
      newError[id] = messError;

      //cap nhat lai state cua value va ca error sau khi xu lys
      console.log(newError);
      this.setState(
        {
          values: newValue,
          errors: newError,
        },

        () => {
          console.log(this.state);
        }
      );
    };
    let { id, name, price, type, img, desc } = this.state.values;
    return (
      <form className="card" onSubmit={HandleSubmit}>
        <div className="card-header bg-dark text-white ">Product info</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input
                  data-type="number"
                  onInput={HandleChangeInput}
                  type=""
                  className="form-control"
                  id="id"
                  name=""
                  value={id}
                />
                <p className="text text-danger">{this.state.errors.id}</p>
              </div>
              <div className="form-group">
                <p>name</p>
                <input
                  data-type="string"
                  onInput={HandleChangeInput}
                  type=""
                  className="form-control"
                  id="name"
                  name=""
                  value={name}
                />
                <p className="text text-danger">{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>img</p>
                <input
                  data-type="string"
                  onInput={HandleChangeInput}
                  type=""
                  className="form-control"
                  id="img"
                  name=""
                  value={img}
                />
                <p className="text text-danger">{this.state.errors.img}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>price</p>
                <input
                  data-type="number"
                  onInput={HandleChangeInput}
                  type=""
                  className="form-control"
                  id="price"
                  name=""
                  value={price}
                />
                <p className="text text-danger">{this.state.errors.price}</p>
              </div>
              <div className="form-group">
                <p>type</p>
                <select
                  onInput={HandleChangeInput}
                  id="type"
                  value={type}
                  className="form-control"
                >
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>desc</p>
                <input
                  data-minlength="6"
                  data-maxlength="32"
                  onInput={HandleChangeInput}
                  type=""
                  className="form-control"
                  id="desc"
                  name=""
                  value={desc}
                />
                <p className="text text-danger">{this.state.errors.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success" type="submit">
            submit
          </button>
          <button
            onClick={() => {
              let { updateProduct } = this.props;
              // gui ra du lieu sau khi thay doi product
              updateProduct({ ...this.state.values });
            }}
            className="btn btn-success mx-2"
            type="button"
          >
            update
          </button>
        </div>
      </form>
    );
  }
}
