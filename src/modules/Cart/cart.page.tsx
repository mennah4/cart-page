import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "./views/Categories";
import { Into } from "./views/into";
import { Search } from "./views/searchbar";

const Cart = () => {
  const cartItems = useSelector((store: any) => store['CART_STORE_NAME'].items);

  return (
    <div className="col-span-9 p-4">
      <div className="flex justify-between">
      <Into/>
      <Search />

      </div>
      <Categories/>
    </div>
  );
};

export default Cart;
