import './App.css'
import React from 'react'
import Card from './components/card'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from './redux/reducers/products'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { Button } from '@mui/material'
import cartSlice, { FetchCart, FetchCartAdd, FetchCartDelete } from './redux/reducers/cartSlice'

let data = {
  "category": "men's clothing",
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "id": 1,
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "price": 109.95,
  "rating": {
    "rate": 3.9,
    "count": 120
  },
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}

type state = { a: string }
type AppDispatch = ThunkDispatch<state, any, AnyAction>

function App() {

  const [isopen, setisopen] = React.useState(true)
  const [inpval, setinpVal] = React.useState<number>()
  

  let changeHanlder = (e: any) => {
    console.log(e.target.value)
    // dispatch(FetchCartDelete(+e.target.value))
  }

  let dispatch: AppDispatch = useDispatch()
  let products = useSelector((state: any) => state.product.Products)
  let cart = useSelector((state: any) => state.cart.Cart)

  React.useEffect(() => {
    dispatch(FetchProducts())
    dispatch(FetchCart())
  }, [])

  return (
    
    <>
      <div className='bg-gray-300 flex gap-3 flex-col items-center min-h-screen w-full p-5' >

        <Button variant="contained" onClick={() => setisopen(!isopen)}>Cart</Button>
        {isopen ? <>
          {cart && cart.map((x:any,i:number)=>(<div  key={i} className="container bg-gray-200 max-w-4xl rounded-md shadow-md">
            <div className="p-3 flex justify-between">
              <div className="flex gap-x-5">
                <img src={x.image} alt="123" className='w-20 object-cover h-20' />
                <div className='flex-col flex justify-between'>
                  <span>Name : {x.title}</span>
                  <span>price : {x.price}</span>
                  <span>Quntity :  <input type="number" className="w-14 px-1" value={x.quantity} onChange={(e) => changeHanlder(e)} /></span>
                </div>
              </div>
              <Button variant='contained' color="error" onClick={()=>dispatch(FetchCartDelete(+x.id))}>Remove</Button>
            </div>
          </div>
          ))}
        </>
          : <div className="flex flex-wrap gap-y-5 gap-x-3 justify-center">
            {
              products && products.map((x: any, i: number) => (<Card key={i} Data={x} onClickEvt={()=>{dispatch(FetchCartAdd(x))}}/>))
            }
          </div>}

      </div>
    </>
  )
}

export default App
