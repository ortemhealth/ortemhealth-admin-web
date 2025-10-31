import { api } from './api';

export async function getProfile() {
  const res = await api.get('/profile');
  return res.data;
}

export async function updateProfile(payload: { name: string, avatarUrl: string, password?: string }) {
  const res = await api.put('/profile', payload);
  return res.data;
}
