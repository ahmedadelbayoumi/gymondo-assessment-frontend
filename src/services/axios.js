import axios from 'axios';

// Creating axios instance with its configuration to be used in the API hook
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
