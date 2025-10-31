import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://api.ortemhealth.com', // Update for your backend
  headers: { 'Content-Type': 'application/json' },
});

