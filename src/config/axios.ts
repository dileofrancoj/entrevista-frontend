import axios from 'axios';

export const APIInstance = axios.create({
    baseURL:'https://rickandmortyapi.com/api/'
})