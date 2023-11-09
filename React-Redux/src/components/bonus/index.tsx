import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { BonAddoneFx, BonMinusoneFx } from "../../redux/actions"


const Bonus = () => {

    let state: any = useSelector((a: any) => a.bonus)
    let dispatch = useDispatch()
    return (
        <>
            <div className="bg-white p-5 border shadow-md rounded-md container">
                <p className="text-blue-500 text-center my-7 font-semibold text-2xl">Bonus :  {state.points}</p>
                <div className="text-center">
                    <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(BonAddoneFx())}>increment</Button>
                    <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(BonMinusoneFx())}>decrement</Button>
                </div>
            </div>

        </>
    )
}

export default Bonus