import axios from 'axios';
// import 'requests' from '../src/Requests'

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})
export default instance;