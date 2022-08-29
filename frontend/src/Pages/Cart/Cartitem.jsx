import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TD } from "./Style";
import { BsX } from "react-icons/bs";
import {
  addToCart,
  deleteProduct,
  GET_CART_PRODUCTS,
  updateQty,
} from "../../Redux/CartReducer/cartAction";
import { GET_PRODUCTS_FAILURE } from "../../Redux/ProductReducer/productActionTypes";

const CartItem = ({ ele }) => {
  const [newQty, setNewQty] = useState(ele.qty);
  const [finalPrice, setFinalPrice] = useState((ele.price * newQty).toFixed(2));
  const myState = useSelector((state) => state.cartReducer.cartProducts);
  const dispatch = useDispatch();

  const handleDelete = (pid) => {
    console.log(pid, "handleDelete");
    dispatch(deleteProduct(pid)).then((res) => {
      dispatch(GET_CART_PRODUCTS());
    });
  };
  const handleUpdateQty = (value) => {
    if (value === -1 && ele.qty > 1) {
      // setNewQty(newQty + value);
      dispatch(updateQty(ele.id, ele.qty + value)).then((r) =>
        dispatch(GET_CART_PRODUCTS())
      );
    } else if (value === 1 && ele.qty < ele.countInStock) {
      // setNewQty(newQty + value);
      dispatch(updateQty(ele.id, ele.qty + value)).then((r) =>
        dispatch(GET_CART_PRODUCTS())
      );
    }
  };

  // useEffect(() => {
  //   setFinalPrice((ele.price * newQty).toFixed(2));
  // }, [newQty]);

  return (
    <>
      <tr>
        <td>
          <img width="100px" height="100px" src={ele.imageUrl[0]} alt="pic" />
        </td>
        <td>
          <p>{ele.title}</p>
          <p>In Stock - Usualy dispatched within 24 hours</p>
        </td>
        <td>{`$${ele.price}`}</td>
        <TD style={{ marginTop: "15px" }}>
          <button onClick={() => handleUpdateQty(-1)}>-</button>
          <p>{ele.qty}</p>
          <button onClick={() => handleUpdateQty(1)}>+</button>
        </TD>
        <td>${(ele.price * ele.qty).toFixed(2)}</td>
        <td>
          <span onClick={() => handleDelete(ele.id)}>
            <BsX />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
