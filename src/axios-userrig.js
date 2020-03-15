import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://can-i-run-it.firebaseio.com/'
})

export default instance;