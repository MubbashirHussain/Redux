import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProducts } from "../API/ProductsApi";

let initialState = {
    Products: [],
    status: "idle"
}



export const FetchProducts = createAsyncThunk(
    "Products/Get",
    async () => {
        let response = await GetProducts()
        return response.data;
    }
)
export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(FetchProducts.fulfilled , (state, action) => {
            state.Products = action.payload
        })
    }
})

export default ProductSlice.reducer