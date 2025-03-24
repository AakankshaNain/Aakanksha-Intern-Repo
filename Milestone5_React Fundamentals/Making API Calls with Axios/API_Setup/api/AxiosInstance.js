import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

// Creating an instance of axios
const AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 2000, 
  headers: {
    'Accept': '*/*',
    'Request-ID': uuidv4(),
  },
});

export const createAbortController = () => new AbortController();

export default AxiosInstance;
