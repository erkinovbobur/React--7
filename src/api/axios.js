import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    timeout: 10000
})
export default apiInstance