import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { accountReducer } from "./reducers/account"
import { BonusReducer } from "./reducers/bonus"



const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: BonusReducer,
    }),
    applyMiddleware(
        thunk,
    )
)
export default store