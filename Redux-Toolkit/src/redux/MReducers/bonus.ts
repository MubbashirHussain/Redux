import { createReducer, createAction } from "@reduxjs/toolkit"


export let Addone = createAction("bonus/Addone")
export let Minusone = createAction("bonus/Minusone")
export let AddbyAmmount = createAction("bonus/AddbyAmount")

const Accountreducer = createReducer({ points: 0, id: 0 }, (builder) => {
    builder
        .addCase(Addone, (state) => {
            state.points++
        })
        .addCase(Minusone, (state) => {
            state.points--
        })
        .addCase(AddbyAmmount, (state, action: any) => {
            state.points += action.payload
        })

})

export default Accountreducer