import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
// import { Addone, Minusone } from "../../redux/MReducers/bonus"
import { Addone, Minusone } from "../../redux/reducers/bonus"


const Bonus = () => {

    let state: any = useSelector((a: any) => a.bonus)
    let dispatch = useDispatch()
    return (
        <>
            <div className="bg-white p-5 border shadow-md rounded-md container">
                <p className="text-blue-500 text-center my-7 font-semibold text-2xl">Bonus :  {state.points}</p>
                <div className="text-center">
                    <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(Addone())}>increment</Button>
                    <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(Minusone())}>decrement</Button>
                </div>
            </div>

        </>
    )
}

export default Bonus