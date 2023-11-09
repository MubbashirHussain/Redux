import { AccAddbyAmount, AccAddone, AccMinusone, Accfullfilled, Accpending, Accrejected } from "../actions";

export function accountReducer(state = { id: 0, balance: 0 }, action:any) {
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