import axios from "axios";

const axiospublic = axios.create({
    baseURL: import.meta.env.VITE_API
})
export default axiospublic; 