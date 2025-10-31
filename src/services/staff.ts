import { api } from './api';

// Get all staff/clinic team members
export async function getStaff() {
  const res = await api.get('/staff');
  return res.data;
}

// Add a new staff member
export async function addStaff(member: { name: string, email: string, role: string }) {
  const res = await api.post('/staff', member);
  return res.data;
}

// Update staff role
export async function updateStaffRole(id: string, role: string) {
  const res = await api.patch(`/staff/${id}/role`, { role });
  return res.data;
}

// Remove staff member
export async function removeStaff(id: string) {
  const res = await api.delete(`/staff/${id}`);
  return res.data;
}
