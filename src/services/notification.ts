import { api } from './api';

// Fetch notifications for admin/clinic user
export async function getNotifications() {
  const res = await api.get('/notifications');
  return res.data;
}

// Mark a notification as read
export async function markNotificationRead(id: string) {
  const res = await api.patch(`/notifications/${id}/read`);
  return res.data;
}

