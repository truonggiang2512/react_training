import React, { Component } from "react";
import Item from "./Item";
import Cart from "./Cart";
const DataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ProductDetail extends Component {
  state = {
    spChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
    arrGioHang: [
      {
        maSP: 3,
        tenSP: "Iphone XS Max",
        giaBan: 27000000,
        hinhAnh: "./img/applephone.jpg",
        soLuong: 2,
      },
    ],
  };

  tangGiamSoLuong = (maSP, Soluong) => {
    let gioHang = this.state.arrGioHang;
    let updateSoLuong = gioHang.find((item) => item.maSP === maSP);
    if (updateSoLuong) {
      updateSoLuong.soLuong += Soluong;
      if (updateSoLuong.soLuong < 1) {
        if (window.confirm("ban co muon xoa khong")) {
          this.xoaSanPham(updateSoLuong.maSP);
          return;
        } else {
          updateSoLuong.soLuong -= Soluong;
          return;
        }
      }
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  xoaSanPham = (maSP) => {
    let index = this.state.arrGioHang.findIndex((item) => item.maSP === maSP);
    if (index !== -1) {
      this.state.arrGioHang.splice(index, 1);
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  //
  themGioHang = (SpClick) => {
    SpClick = { ...SpClick, soLuong: 1 };
    //Kiểm tra sản phẩm đã có trong arr giỏ hàng hay chưa nếu có thì tăng số lượng chưa thì thêm vô
    let gioHang = this.state.arrGioHang;
    let spGH = gioHang.find((item) => item.maSP === SpClick.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHang.push(SpClick);
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  renderTable = () => {
    let arrJSX = DataPhone.map((phone) => {
      return (
        <div className="col-md-4 mt-2" key={phone.maSP}>
          <Item
            themGioHang={this.themGioHang}
            item={phone}
            xemChiTiet={this.xemChiTiet}
          />
        </div>
      );
    });
    return arrJSX;
  };
  xemChiTiet = (SpClick) => {
    console.log(SpClick);
    this.setState({
      spChiTiet: SpClick,
    });
  };
  render() {
    return (
      <div className="container">
        {" "}
        <Cart
          tangGiamgSoLuong={this.tangGiamSoLuong}
          xoaSanPham={this.xoaSanPham}
          arrGioHang={this.state.arrGioHang}
        />
        <h3>Danh Sach San Pham</h3>
        <div className="row">{this.renderTable()}</div>
        <br />
        <br />
        <div className="row" style={{ minHeight: 400 }}>
          <div className="col-3 text-center ">
            <h3 className="text-center"> Ten San Pham Chi Tiet</h3>
            <img
              src={this.state.spChiTiet.hinhAnh}
              alt=""
              height={"300px"}
              width={"100%"}
            />
          </div>
          <div className="col-9">
            <h3>Thong so ky thuat </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{this.state.spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{this.state.spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{this.state.spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{this.state.spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{this.state.spChiTiet.ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{this.state.spChiTiet.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
