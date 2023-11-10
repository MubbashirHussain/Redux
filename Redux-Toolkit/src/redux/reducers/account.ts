import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const UserInit = createAsyncThunk(
    "account/init",
    async (userId: number) => {
        const { data } = await axios.get(`http://localhost:8080/accounts/${userId}`)
        return data
    }
)

let initialState:any = { balance: 0, id: 0 }

export const AccountSlice: any = createSlice({
    name: "account",
    initialState,
    reducers: {
        Addone: (state) => {
            state.balance++
        },
        Minusone: (state) => {
            state.balance -= 1
        },
        AddbyAmount: (state, action) => {
            state.balance += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(UserInit.fulfilled, (state, action) => {
                state.pending = false
                state.balance = action.payload.balance
                state.id = action.payload.id

            })
            .addCase(UserInit.pending, (state) => {
                state.pending = true
            })
            .addCase(UserInit.rejected, (state, action) => {
                state.error = action.error
                state.pending = false
            })

    }
})

export let { Addone, AddbyAmount, Minusone } = AccountSlice.actions
export default AccountSlice.reducer

