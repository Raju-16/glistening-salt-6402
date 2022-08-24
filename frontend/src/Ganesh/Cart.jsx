import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OffersInCart from "./OffersInCart"; 
import CartItem from "./Cartitem";
import { TABLE, TD, MainContainer } from "./Style";
import GiftSelection from "./GiftSelection";
import { GET_CART_PRODUCTS } from "./Cart_Action";


const Cart = () => {
  const myState = useSelector((state) => state.cartReducer.cartProducts);
 
  const dispatch = useDispatch();
  useEffect(() => {
    if(myState?.length===0)
    {
      dispatch(GET_CART_PRODUCTS());
    }
   
  },[myState?.length, dispatch] );
  console.log(myState);
  return (
    <>
      {/* <Navbar /> */}
      <OffersInCart />
      <MainContainer>
        <TABLE>
          <thead>
            <tr>
              <td>Items</td>
              <td></td>
              <td>Price</td>
              <TD>Quantity</TD>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {/* {myState.map((elem) => {
              return <CartItem key={elem.id} {...elem} />;
            })} */}
          </tbody>
        </TABLE>
        <div className="div">
          <GiftSelection />
          <GiftSelection />
        </div>
      </MainContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
