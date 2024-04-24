import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-fivedevs.onrender.com/'
})

export default api;