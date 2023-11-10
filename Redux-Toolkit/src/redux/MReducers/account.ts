import { createReducer, createAction } from "@reduxjs/toolkit"


export let Addone = createAction("account/Addone")
export let Minusone = createAction("account/Minusone")
export let AddbyAmmount = createAction<number>("account/AddbyAmount")

const Accountreducer = createReducer({ balance: 0, id: 0 }, (builder) => {
    builder
        .addCase(Addone, (state) => {
            state.balance++
        })
        .addCase(Minusone, (state) => {
            state.balance--
        })
        .addCase(AddbyAmmount, (state, action) => {
            state.balance += action.payload
        })

})

export default Accountreducer