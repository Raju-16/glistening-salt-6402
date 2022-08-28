import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LogInPage from "./LogInPage/LogInPage";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import SignUpPage from "./SignUpPage/SignUpPage";
import ProductsPage from "./ProductsPage/ProductsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default AllRoutes;
