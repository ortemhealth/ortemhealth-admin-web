import axios from 'axios';
import { getLocation } from '../contexts/LocationContext';
import { getUserRole, getTenantId } from '../contexts/AuthContext';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
  (config) => {
    // Add active clinic location header
    const location = getLocation();
    if (location) config.headers['X-Clinic-Location'] = location;

    // Add user role header
    const userRole = getUserRole();
    if (userRole) config.headers['X-User-Role'] = userRole;

    // Add tenant/multi-clinic header
    const tenantId = getTenantId();
    if (tenantId) config.headers['X-Tenant-Id'] = tenantId;

    // (optional) Add user ID for fine audit logging:
    const userId = localStorage.getItem('userId');
    if (userId) config.headers['X-User-Id'] = userId;

    return config;
  },
  (error) => Promise.reject(error)
);
