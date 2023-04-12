import React, { Component } from "react";
import { Outlet } from "react-router-dom";
//Component này sẽ đại diện cho component được load trên url
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="header p-3 bg-dark text-white">
          <nav>
            <a href="./" className="text-white-mx-2 nav-link">
              Home
            </a>
            <a href="./cart" className="text-white-mx-2 nav-link">
              Cart
            </a>
          </nav>
          <main style={{ minHeight: "650px" }}>
            <Outlet></Outlet>
          </main>
        </header>
        <footer className="bg-dark text-white p-3 text-center">
          <h1>footer</h1>
        </footer>
      </div>
    );
  }
}
