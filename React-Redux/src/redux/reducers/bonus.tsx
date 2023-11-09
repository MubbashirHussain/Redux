import { BonAddbyAmount, BonAddone, BonInit, BonMinusone } from "../actions";

export function BonusReducer(state = { id: 0, points: 0 }, action:any) {
    switch (action.type) {
        case BonInit: return { ...action.payload };
        case BonAddone: return { ...state, points: state.points + 1 };
        case BonMinusone: return { ...state, points: state.points - 1 };
        case BonAddbyAmount: return { ...state, points: state.points + action.payload };
        default: return state;
    }
}