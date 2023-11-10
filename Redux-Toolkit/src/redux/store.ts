import { configureStore } from "@reduxjs/toolkit";
// import AccountReducer from "./MReducers/account";
// import BonusReducer from "./MReducers/bonus";
import AccountReducer from "./reducers/account";
import BonusReducer from "./reducers/bonus";
import { Adminapi } from "./RTK-query/index";


const store = configureStore({
    reducer: {
        account: AccountReducer,
        bonus: BonusReducer,
        [Adminapi.reducerPath]: Adminapi.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(Adminapi.middleware)
    ),

})

export default store;