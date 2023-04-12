import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Homecomponent/Home";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import "./index.css";
import DemoProps from "./Props/DemoProps";
import ProductDetail from "./Props/ProductDetail/ProductDetail";
import ProductList from "./Props/ProductList/ProductList";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoLogin from "./State/DemoLogin";
import DemoPageLogin from "./State/DemoPageLogin";
import DemoState from "./State/DemoState";
import StyleDemo from "./StyleDemo/StyleDemo";
//Cấu hình react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import Cart from "./Props/ProductDetail/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="cart" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoLogin /> */}
    {/* <DemoState /> */}
    {/* <StyleDemo /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoPageLogin /> */}
    {/* <DemoProps /> */}
    {/* <ProductList /> */}
    {/* 
    <ProductDetail /> */}
  </div>
);
