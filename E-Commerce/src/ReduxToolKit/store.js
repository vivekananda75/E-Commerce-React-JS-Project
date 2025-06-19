import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ReduxToolKit/productsSlice";
export const store=configureStore({
    reducer:{cartItems:productReducer}
})