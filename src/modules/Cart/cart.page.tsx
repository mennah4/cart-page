import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "./views/Categories";
import { Into } from "./views/into";
import { Search } from "./views/searchbar";

const Cart = () => {
  const cartItems = useSelector((store: any) => store['CART_STORE_NAME'].items);

  return (

      <div className="flex gap-2">
        <div className="w-2/3 h-full m-3 p-3">
          <div className="flex justify-between my-3 py-3">
            <Into />
            <Search />
          </div>
          <Categories />
        </div>
        <div className="w-1/3 h-ful bg-gray-50 p-3">
          summary
        </div>
      </div>

  );
};

export default Cart;
