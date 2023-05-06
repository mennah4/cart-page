import { createSlice } from "@reduxjs/toolkit";
import data  from "../../assets/data.json"

interface CartItem {
  
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CartState {
  items: CartItem[],
  status: string,
  error: Error | undefined
}

const initialState: CartState = {
  items: data,
  status: 'idle',
  error: undefined
}

export const slice = createSlice({
  name: 'CART_STORE_NAME',
  initialState,
  reducers: {

  },
});

export const actions = slice.actions
export const reducer = slice.reducer
