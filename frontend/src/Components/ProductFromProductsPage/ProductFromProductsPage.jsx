import React, { useState } from "react";
import "./ProductFromProductsPage.css";
import Rating from "@mui/material/Rating";

const ProductFromProductsPage = ({ item }) => {
  const [index, setIndex] = useState(0);

  const handleFocus = (value) => {
    if (item.imageUrl.length > 1 && value) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="productfromproductspage">
      <img
        className="hover"
        onMouseEnter={() => handleFocus(true)}
        onMouseLeave={() => handleFocus(false)}
        src={item.imageUrl[index]}
        alt=""
      />
      <div>
        <p className="productfromproducts__title hover">{item.title}</p>
        <p className="hover">
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            style={{ color: "rgb(34,34,34)", fontSize: "20px" }}
            readOnly
          />
        </p>
        <strong className="hover">${item.priceDiscount}</strong>
      </div>
      <button>QUICK BUY</button>
    </div>
  );
};

export default ProductFromProductsPage;
