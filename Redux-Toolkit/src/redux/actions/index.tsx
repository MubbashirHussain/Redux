import axios from "axios"

export const AccInit = "Accounts/init"
export const AccAddone = "Accounts/Addone"
export const AccMinusone = "Accounts/Minusone"
export const AccAddbyAmount = "Accounts/AddbyAmount"
export const Accpending = "Accounts/pending"
export const Accfullfilled = "Accounts/fullfilled"
export const Accrejected = "Accounts/rejected"
export const BonInit = "Bonus/init"
export const BonAddone = "Bonus/Addone"
export const BonMinusone = "Bonus/Minusone"
export const BonAddbyAmount = "Bonus/AddbyAmount"




export let AccAddoneFx = () => ({ type: AccAddone })
export let AccMinusoneFx = () => ({ type: AccMinusone })
export let AccAddbyAmountFx = (value:any) => ({ type: AccAddbyAmount, payload: value })
export let BonAddoneFx = () => ({ type: BonAddone })
export let BonMinusoneFx = () => ({ type: BonMinusone })
export let BonAddbyAmountFx = (value:any) => ({ type: BonAddbyAmount, payload: value })

export let UserInit = (id:number | string) => {
    return async (dispatch:Function) => {
        try {
            dispatch(AccpendingFx())
            const { data } = await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(AccfullfilledFx(data))
        } catch (er) {
            dispatch(AccrejectedFx(er))
        }

    }
}

export let AccpendingFx = () => ({ type: Accpending, pending: true })
export let AccfullfilledFx = (value:any) => ({ type: Accfullfilled, payload: value })
export let AccrejectedFx = (value:any) => ({ type: Accrejected, error: value })
