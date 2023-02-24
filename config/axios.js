import axios from "axios"
const SERVER_URL = 'http://54.205.208.16:8080/api_airnbnb'
const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000
})

export default instance;