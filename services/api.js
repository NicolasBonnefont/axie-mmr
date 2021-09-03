import axios from 'axios'

const api = axios.create({
  baseURL: 'https://axie-infinity.p.rapidapi.com/get-daily/0xbb8e1da7cc8b222ba0d2e1e634653abea68e9771' 
})



export default api