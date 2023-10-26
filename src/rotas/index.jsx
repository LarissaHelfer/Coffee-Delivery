import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Checkout from "./../pages/CheckOut/index";
import { CoffeeProvider } from "../context";
import CheckOutSuccess from "../pages/CheckOutSuccess";

const Rotas = () => {
  return (
    <div>
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutSuccess" element={<CheckOutSuccess />} />
          </Routes>
    </div>
  );
};

export default Rotas;
