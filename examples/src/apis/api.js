import axios from 'axios';

export const mockApi = axios.create({
    baseURL: 'http://localhost:7151'
});