import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TD } from "./Style";
import { BsX } from "react-icons/bs";
import {
  deleteProduct,
  GET_CART_PRODUCTS,
  updateQty,
} from "../../Redux/CartReducer/cartAction";
const CartItem = ({ image, title, qty, price, id }) => {
  const myState = useSelector((state) => state.cartReducer.cartProducts);
  const dispatch = useDispatch();
  let Price = (price * qty).toFixed(2);

  const handleDelete = (pid) => {
    console.log(pid, "handleDelete");
    dispatch(deleteProduct(pid)).then((res) => {
      dispatch(GET_CART_PRODUCTS());
    });
  };
  const handleUpdateQty = (value) => {
    if (value === 1) {
      qty++;
      let newupdateQty = {
        qty: qty,
      };
      dispatch(updateQty(id, newupdateQty)).then((res) => {
        dispatch(GET_CART_PRODUCTS());
      });
    } else {
      qty--;
      let newupdateQty = {
        qty: qty,
      };
      dispatch(updateQty(id, newupdateQty)).then((res) => {
        dispatch(GET_CART_PRODUCTS());
      });
    }
  };
  return (
    <>
      <tr>
        <td>
          <img width="100px" height="100px" src={image} alt="pic" />
        </td>
        <td>
          <p>{title}</p>
          <p>In Stock - Usualy dispatched within 24 hours</p>
        </td>
        <td>{`$${price}`}</td>
        <TD style={{ marginTop: "15px" }}>
          <button onClick={() => handleUpdateQty(-1)}>-</button>
          <p>{qty}</p>
          <button onClick={() => handleUpdateQty(1)}>+</button>
        </TD>
        <td>{`$${Price}`}</td>
        <td>
          <span onClick={() => handleDelete(id)}>
            <BsX />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
