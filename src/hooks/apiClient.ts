import axios from 'axios';

// Retrieve the API baseURL from the environment variables.
const baseURL = import.meta.env.VITE_API_URL;

// Create an axios instance with the baseURL.
export const HTTP = axios.create({
  baseURL,
  withCredentials: true,
});