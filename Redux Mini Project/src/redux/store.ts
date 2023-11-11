import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
    reducer: {
        product:productsReducer,
        cart:cartReducer
    },
})

export default store;