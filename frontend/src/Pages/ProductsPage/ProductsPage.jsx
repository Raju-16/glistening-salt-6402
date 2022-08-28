import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductFromProductsPage from "../../Components/ProductFromProductsPage/ProductFromProductsPage";
import { getProducts } from "../../Redux/ProductReducer/productAction";
import "./ProductsPage.css";

const ProductsPage = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();
  const en_brand_content = searchParams.getAll("en_brand_content");
  const en_hairCategory_content = searchParams.getAll(
    "en_hairCategory_content"
  );
  const en_electricalTools_content = searchParams.getAll(
    "en_electricalTools_content"
  );
  const en_hairCareBenefit_content = searchParams.getAll(
    "en_hairCareBenefit_content"
  );
  const en_keyIngredients_content = searchParams.getAll(
    "en_keyIngredients_content"
  );
  const en_price_content = searchParams.getAll("en_price_content");
  const en_savingPercent_content = searchParams.getAll(
    "en_savingPercent_content"
  );
  const en_averageReviewScore_content = searchParams.getAll(
    "en_averageReviewScore_content"
  );
  const location = useLocation();
  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    if (products?.length === 0 || location.search) {
      const params = {
        brand: en_brand_content,
        hairCategory: en_hairCategory_content,
        hairTool: en_electricalTools_content,
        hairBenefit: en_hairCareBenefit_content,
        keyIngredients: en_keyIngredients_content,
      };
      console.log("hii");
      dispatch(getProducts({ params, sortOrder }));
    } else {
      dispatch(getProducts({}));
    }
  }, [products?.length, dispatch, location.search]);
  // console.log(sortOrder);
  // console.log("location", location);

  useEffect(() => {
    if (sortOrder) {
      setSearchParams({
        en_brand_content,
        en_hairCategory_content,
        en_electricalTools_content,
        en_hairCareBenefit_content,
        en_keyIngredients_content,
        en_price_content,
        en_savingPercent_content,
        en_averageReviewScore_content,
        sortOrder,
      });
    }
  }, [sortOrder, setSearchParams]);

  // console.log(products);

  return (
    <div className="productspage">
      <FilterSidebar />
      <div className="products__list">
        <div className="products__heading">
          <p className="products__headTitle">Hair Care Products</p>
          <p className="products__count">{products.length} results</p>
        </div>
        <div className="products__functionality">
          <div className="products__sorting">
            <label>Sort by</label>
            <select name="sortOrder" onChange={(e) => handleSortOrder(e)}>
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
