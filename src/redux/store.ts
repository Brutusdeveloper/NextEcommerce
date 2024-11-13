import { configureStore } from "@reduxjs/toolkit";
import  shoppersSlice  from "./shoppersSlice";

export const store = configureStore({
    reducer:{
        shoppers: shoppersSlice
    }
})
