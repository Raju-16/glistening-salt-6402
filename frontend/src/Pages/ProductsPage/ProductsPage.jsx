import React from "react";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="productspage">
      <FilterSidebar />
      <div className="products__list"></div>
    </div>
  );
};

export default ProductsPage;
