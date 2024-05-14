import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-fivedevs.onrender.com/'
})
// Aqui criamos a variavel api que contem o link da api que vamos utilizar nos outros códigos 

export default api;