import axios from "axios"

export const getMocks = () => {
    return axios.post("/api/mocks")
}