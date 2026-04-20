import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "../features/fetchSlice"

export const store=configureStore({
    reducer:{
        fetchData:fetchSlice,
    }
})