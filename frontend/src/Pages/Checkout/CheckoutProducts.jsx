import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "../Cart/Style";
import { GET_CART_PRODUCTS } from "../../Redux/CartReducer/cartAction";

const CheckoutProducts = () => {
  const myState = useSelector((state) => state.cartReducer.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (myState?.length === 0) {
      dispatch(GET_CART_PRODUCTS());
    }
  }, [myState?.length, dispatch]);
  console.log(myState);

  let total;
  if (myState.length > 0) {
    total = myState.reduce((a, b) => {
      return a + b.price * b.qty;
    }, 0);
    console.log(total);
  } else {
    total = 0;
  }

  return (
    <CartProduct>
      <div className="one">
        <p>Order Summary</p>
        <p>{myState.length} items</p>
      </div>
      <p style={{ display: "flex-start" }}>Order Number : 428220247</p>
      <div className="two">
        {myState.map((elem) => {
          return (
            <div style={{ marginTop: "10px" }} key={elem.id}>
              <div>
                <img
                  style={{ marginRight: "10px" }}
                  width="80px"
                  height="80px"
                  src={elem.imageUrl[0]}
                  alt=""
                />
              </div>
              <div>
                <p>{elem.title}</p>
                <h5>Quantity: {elem.qty}</h5>
                <h5>${elem.price * elem.qty}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="three">
        <p>Delivery</p>
        <p>Calculated at next step</p>
      </div>
      <div className="four">
        <select name="" id="">
          <option value="">Savings</option>
        </select>
      </div>
      <div>
        <h4>Total to pay</h4>
        <p>${total}</p>
      </div>
    </CartProduct>
  );
};

export default CheckoutProducts;
