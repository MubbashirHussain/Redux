import axios from "axios"

export const GetCart = async () => {
    return axios.get("http://localhost:3000/cart")
}
export const AddCart = async (item:any) => {
    return axios.post("http://localhost:3000/cart" , item)
}
export const DeleteCart = async (id:number) => {
    return axios.delete(`http://localhost:3000/cart/${id}`)
}
export const UpdateCart = async (id:number , changes:any) => {
    return axios.patch(`http://localhost:3000/cart/${id}`  , changes)
}