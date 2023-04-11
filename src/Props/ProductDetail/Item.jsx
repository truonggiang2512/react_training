import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { item, xemChiTiet } = this.props;
    return (
      <div>
        <div className="card w-100 h-100">
          <img src={item.hinhAnh} alt="" height={"100%"} width={"100%"} />
          <div className="card-body">
            <h3>{item.tenSP}</h3>
            <p>{item.giaBan.toLocaleString()}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                {
                  xemChiTiet(item);
                }
              }}
            >
              Xem chi tiet
            </button>
          </div>
        </div>
      </div>
    );
  }
}
