import axios from 'axios'
import { API_URL } from '../constants'


export const fetchData = () => {
    return axios.create({
        baseURL: API_URL,
    })
}