import React, { Component } from "react";

const sum = (gia, soLuong) => (gia * soLuong).toLocaleString();

export default class Cart extends Component {
  renderGioHang = () => {
    let { arrGioHang, xoaSanPham, tangGiamgSoLuong } = this.props;
    return arrGioHang.map((sp) => {
      return (
        <tbody>
          <tr>
            <td>{sp.soLuong}</td>
            <td>{sp.tenSP}</td>
            <td>
              <img src={sp.hinhAnh} width={50} height={50} />
              <td>{sp.giaBan}</td>
            </td>
            <td>
              <button
                onClick={() => {
                  {
                    tangGiamgSoLuong(sp.maSP, 1);
                  }
                }}
                className="mx-2 btn-primary"
              >
                +
              </button>
              <button
                onClick={() => {
                  {
                    tangGiamgSoLuong(sp.maSP, -1);
                  }
                }}
                className="mx-2 btn-primary"
              >
                -
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  {
                    xoaSanPham(sp.maSP);
                  }
                }}
                className="btn btn-danger"
              >
                Xoa
              </button>
            </td>
            <td>{sum(sp.giaBan, sp.soLuong)}</td>
          </tr>{" "}
        </tbody>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Ma sp</th>
            <th>Ten sp</th>
            <th>Hinh anh</th>
            <th>Gia Ban</th>
            <th>So Luong</th>
            <th>Tong Tien</th>
            <th></th>
          </tr>
        </thead>
        {this.renderGioHang()}
      </table>
    );
  }
}
