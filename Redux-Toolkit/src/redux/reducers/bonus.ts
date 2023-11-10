import { createSlice   ,createAction} from "@reduxjs/toolkit";


export let AddpointWhenAmount = createAction<number>("account/AddbyAmount")

export const BonusSlice: any = createSlice({
    name: "Bonus",
    initialState: { points: 0, id: 0 },
    reducers: {
        Addone: (state) => {
            state.points++
        },
        Minusone: (state) => {
            state.points--
        },
        AddbyAmmount: (state, action) => {
            state.points += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(AddpointWhenAmount , (state ,action)=>{
            if(action.payload >= 100) state.points++
        })
    }
})

export let { Addone, AddbyAmmount, Minusone} = BonusSlice.actions
export default BonusSlice.reducer

