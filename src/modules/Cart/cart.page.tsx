import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store: any) => store['CART_STORE_NAME'].items);

  return (
    <div
      id="cart"
      className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap w-[80%] m-auto mt-[4%] gap-[5%] "
    >
    </div>
  );
};

export default Cart;
