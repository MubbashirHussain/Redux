import React from 'react'
import './App.css'
import { Button } from '@mui/material'
import Bonus from './components/bonus'
import Account from './components/account'
import { useDispatch, useSelector } from 'react-redux'
import { UserInit } from './redux/actions'

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

type State = { a: string }; // your state type
type AppDispatch = ThunkDispatch<State, any, AnyAction>;


function App() {

  const [InputVal, setInputval] = React.useState<string | number>("")
  let state: any = useSelector((a: any) => a)
  let account: any = useSelector((a: any) => a.account)
  let bonus: any = useSelector((a: any) => a.bonus)
  let dispatch: AppDispatch = useDispatch()

  console.log(state)

  return (
    <>
      <div className='bg-gray-300 min-h-screen w-full'>
        <input type="text" value={InputVal} onChange={(e) => setInputval(e.target.value)} className='py-1 px-3 m-5' placeholder='id' />
        <Button onClick={() => { dispatch(UserInit(InputVal)) }} variant="contained">get user</Button>
        <div className="m-5">

          <p className="text-blue-700 text-center my-7 font-semibold text-2xl">{account.pending ? "Loading..." : account.error ?? `Account Balance : ${account.balance}`}</p>
          <p className="text-blue-700 text-center my-7 font-semibold text-2xl">Bonus : {bonus.points}</p>
        </div>
        <div className='flex flex-col gap-y-3 items-center'>
          <Account />
          <Bonus />
        </div>
      </div>
    </>
  )
}

export default App
