import axios from 'axios';
import { api } from '../urlConfig';


// Get the token from localStorage

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    // Check if the token exists and is not expired
  },
});

export default axiosInstance;
