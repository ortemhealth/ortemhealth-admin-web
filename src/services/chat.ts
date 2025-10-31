import { api } from './api';

// Fetch all chat messages with a user/staff
export async function fetchMessages(withId: string) {
  const res = await api.get(`/chats/${withId}`);
  return res.data; // [{ sender: 'admin'|'user', message: '', time: '' }]
}

// Send a message
export async function sendMessage(toId: string, message: string) {
  return api.post(`/chats/${toId}`, { message });
}
