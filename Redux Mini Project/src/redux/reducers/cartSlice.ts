import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCart, DeleteCart, GetCart, UpdateCart } from "../API/CartApi";

let initialState = {
    Cart: <any>[],
    status: "idle"
}



export const FetchCart = createAsyncThunk(
    "Cart/Get",
    async () => {
        let response = await GetCart()
        return response.data;
    }
)
export const FetchCartAdd = createAsyncThunk(
    "Cart/Add",
    async (item: any) => {
        const { id, image, price, title } = item
        let response = await AddCart({ id, image, price, title, quantity: 1 })
        return response.data;
    }
)
export const FetchCartDelete = createAsyncThunk(
    "Cart/Delete",
    async (id: number) => {
        await DeleteCart(id)
        return id;
    }
)
export const FetchCartUpdate = createAsyncThunk(
    "Cart/Update",
    async ({ id, changes }: any) => {
        let response = await UpdateCart(id, { changes })
        return response.data;
    }
)
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(FetchCart.fulfilled, (state, action) => {
                state.Cart = action.payload
            })
            .addCase(FetchCartAdd.fulfilled, (state, action: any) => {
                state.Cart.push({ ...action.payload })
            })
            .addCase(FetchCartDelete.fulfilled, (state, action) => {
                let Index = state.Cart.findIndex((x: any) => x.id === action.payload)
                state.Cart.splice(Index, 1)
            })
    }
})

export default cartSlice.reducer