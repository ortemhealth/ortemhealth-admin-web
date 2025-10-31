import { api } from './api';

export async function login(email: string, password: string) {
  const res = await api.post('/auth/login', { email, password });
  // Assuming API returns { token, user }
  return res.data;
}

export async function logout() {
  // Remove JWT and clear session, handled in AuthContext
}

