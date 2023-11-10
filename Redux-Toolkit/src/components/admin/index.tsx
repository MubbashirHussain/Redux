import { Button } from "@mui/material"
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountQuery, useSetAccountMutation } from "../../redux/RTK-query"
import React from "react"

const Admin = () => {
    const [Inpval, setInputval] = React.useState<any>({})


    const { data } = useGetAccountQuery("accounts")
    const [addAccount] = useAddAccountMutation()
    const [DeleteAccount] = useDeleteAccountMutation()
    const [EditAccount] = useSetAccountMutation()




    let vlu = (e: any) => setInputval({ ...Inpval, [e.target.name]: e.target.value })
    return (
        <>
            <div className="bg-white p-5 border shadow-md rounded-md container">
                {data && data.map((x: any, i: number) => (
                    <p key={i} className="text-blue-500 text-center my-7 font-semibold text-2xl"> Account Id {x.id} Balance : {x.balance}
                        <Button variant="contained" color="error" sx={{ m: 1 }} onClick={() => { DeleteAccount(x.id) }}>Delete</Button>
                        <input type="number" value={Inpval[x.id]} onChange={vlu} name={x.id} className='bg-gray-300 py-1 px-3 m-5 w-20' placeholder='Amount' />
                        <Button variant="contained" color="success" sx={{ m: 1 }} onClick={() => { EditAccount({ id: x.id, balance: Inpval[x.id] }) }}>Edit</Button>
                    </p>
                ))}

                <input type="number" value={Inpval?.NewAmount} onChange={vlu} name={"NewAmount"} className='bg-gray-300 py-1 px-3 m-5 w-20' placeholder='Amount' />
                <Button variant="contained" color="success" sx={{ m: 1 }} onClick={() => { addAccount({ balance: Inpval.NewAmount, id: data.length + 1 }) }}>Add New</Button>
                <div className="text-center">
                </div>
            </div >
        </>
    )
}

export default Admin