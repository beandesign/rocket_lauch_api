import axios from 'axios'

const api = axios.create({
  baseURL: process.env.SPACEX_BASE_URL
})

export default api