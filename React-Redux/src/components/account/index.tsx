import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AccAddbyAmountFx, AccAddoneFx, AccMinusoneFx } from '../../redux/actions'

const Account = () => {

    const [Inpval, setInputval] = React.useState<number>(0)
    let state: any = useSelector((a: any) => a.account)
    let dispatch = useDispatch()


    return (
        <div className="bg-white p-5 border shadow-md rounded-md container">
            <p className="text-blue-500 text-center my-7 font-semibold text-2xl">Account Balance : {state.balance}</p>
            <div className='text-center'>
                <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(AccAddoneFx())}>increment</Button>
                <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(AccMinusoneFx())}>decrement</Button>
                <input type="number" value={Inpval} onChange={(e)=>setInputval(Number(e.target.value))} className='bg-gray-300 py-1 px-3 m-5 w-20' placeholder='Amount' />
                <Button variant="contained" sx={{ m: 1 }} onClick={()=>dispatch(AccAddbyAmountFx(Inpval))}>increment by ammount</Button>
            </div>
        </div>
    )
}

export default Account