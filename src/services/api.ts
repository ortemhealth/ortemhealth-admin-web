import axios from 'axios';
import { getLocation } from '../contexts/LocationContext';

// Setup Axios with base URL and content type
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

// Inject location into every request header globally
api.interceptors.request.use(
  (config) => {
    const location = getLocation();
    if (location) {
      config.headers['X-Clinic-Location'] = location;
      // Or, add as a query param instead if backend expects it there:
      // config.params = { ...config.params, location };
    }
    return config;
  },
  (error) => Promise.reject(error)
);
