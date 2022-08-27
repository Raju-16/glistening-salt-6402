import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductFromProductsPage from "../../Components/ProductFromProductsPage/ProductFromProductsPage";
import { getProducts } from "../../Redux/ProductReducer/productAction";
import "./ProductsPage.css";

const ProductsPage = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ brand: "Alterna" }));
    // }
  }, [products?.length, dispatch]);

  // console.log(products);

  return (
    <div className="productspage">
      <FilterSidebar />
      <div className="products__list">
        <div className="products__heading">
          <p className="products__headTitle">Hair Care Products</p>
          <p className="products__count">56 results</p>
        </div>
        <div className="products__functionality">
          <div className="products__sorting">
            <label>Sort by</label>
            <select>
              <option value="Default">Default</option>
              <option value="priceAscending">Price:Low to High</option>
              <option value="priceDescending">Price:High to Low</option>
              <option value="title">A-Z</option>
            </select>
          </div>
          <div className="products__pagination">pagination</div>
        </div>
        <div className="products__allproducts">
          {products?.length > 0 &&
            products?.map((item) => {
              return <ProductFromProductsPage key={item._id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
