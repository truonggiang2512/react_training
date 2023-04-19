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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import Cart from "./Props/ProductDetail/Cart";
import Baitapchonxe from "./State/Baitapchonxe";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ReactFormDemo from "./ReactFormDemo/ReactFormDemo";
import ReactLifeCrycle from "./Pages/ReactLifeCrycle/ReactLifeCrycle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<DemoLogin />}></Route>
          <Route path="cart" element={<ProductDetail />}></Route>{" "}
          <Route path="cars" element={<Baitapchonxe />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="react-form" element={<ReactFormDemo />}></Route>
          <Route path="react-lifeCrycle" element={<ReactLifeCrycle />}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
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
