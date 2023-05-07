import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "./views/Categories";
import { Into } from "./views/into";
import { Search } from "./views/searchbar";
import CartItem from "./views/item";
import SettingsIcon from "../../assets/icons/settings";
import { CartSummary } from "./views/summary";
import { PaymentButton } from "./views/payment";
import { PaymentTotal } from "./views/total";

const Cart = () => {
  const cartItems = useSelector((store: any) => store['CART_STORE_NAME'].items);

  return (

    <div className="flex gap-2">
      <div className="w-2/3 h-full m-3 p-3">
        <div className="flex justify-between my-5 py-3">
          <Into />
          <Search />
        </div>
        <Categories />
        <div className="grid grid-cols-3 gap-4">
          {cartItems.map((item: any) => (
            <CartItem product={item} />
          ))}
        </div>
      </div>
      <div className="w-1/3 h-ful bg-gray-50 mx-3 p-3">
        <div className="flex justify-between m-3 p-3">
          <p className="font-semibold text-xl">Current Order</p>
          <button className="flex items-center h-10 w-12 mx-1 justify-center rounded-lg p-1 text-sm font-medium bg-gray-100 hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <SettingsIcon />
            
          </button>
        </div>
        <div className="mt-3">
              <CartSummary />
              <PaymentTotal />
              <PaymentButton/>
            </div>
      </div>
    </div>

  );
};

export default Cart;
