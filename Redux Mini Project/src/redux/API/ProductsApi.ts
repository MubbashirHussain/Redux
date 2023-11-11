import axios from "axios"

export const GetProducts = async () => {
    return axios.get("http://localhost:3000/products")
}