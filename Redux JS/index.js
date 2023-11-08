import axios from "axios"
import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

// action Name constant

const AccInit = "Accounts/init"
const AccAddone = "Accounts/Addone"
const AccMinusone = "Accounts/Minusone"
const AccAddbyAmount = "Accounts/AddbyAmount"
const Accpending = "Accounts/pending"
const Accfullfilled = "Accounts/fullfilled"
const Accrejected = "Accounts/rejected"


const BonInit = "Bonus/init"
const BonAddone = "Bonus/Addone"
const BonMinusone = "Bonus/Minusone"
const BonAddbyAmount = "Bonus/AddbyAmount"



const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: BonusReducer,
    }),
    applyMiddleware(
        thunk.default,
        logger.default
    )
)


function accountReducer(state = { id: 0, balance: 0 }, action) {
    switch (action.type) {
        case Accfullfilled: return { ...action.payload, pending: false };
        case Accpending: return { ...state, pending: action.pending };
        case Accrejected: return { ...state, error: action.error, pending: false };
        case AccAddone: return { ...state, balance: state.balance + 1 };
        case AccMinusone: return { ...state, balance: state.balance - 1 };
        case AccAddbyAmount: return { ...state, balance: state.balance + action.payload };
        default: return state;
    }
}
function BonusReducer(state = { id: 0, points: 0 }, action) {
    switch (action.type) {
        case BonInit: return { ...action.payload };
        case BonAddone: return { ...state, points: state.points + 1 };
        case BonMinusone: return { ...state, points: state.points - 1 };
        case BonAddbyAmount: return { ...state, points: state.points + action.payload };
        default: return state;
    }
}


store.subscribe(() => console.log(store.getState()))
// action creater functions

let AccAddoneFx = () => ({ type: AccAddone })
let AccMinusoneFx = () => ({ type: AccMinusone })
let AccAddbyAmountFx = (value) => ({ type: AccAddbyAmount, payload: value })
let BonAddoneFx = () => ({ type: BonAddone })
let BonMinusoneFx = () => ({ type: BonMinusone })
let BonAddbyAmountFx = (value) => ({ type: BonAddbyAmount, payload: value })

let UserInit = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(AccpendingFx())
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
            dispatch(AccfullfilledFx(data))
        } catch (er) {
            dispatch(AccrejectedFx(er))
        }

    }
}

let AccpendingFx = () => ({ type: Accpending, pending: true })
let AccfullfilledFx = (value) => ({ type: Accfullfilled, payload: value })
let AccrejectedFx = (value) => ({ type: Accrejected, error: value })

store.dispatch(UserInit(3))
setInterval(() => {
}, 1000);