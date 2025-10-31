// src/services/appointment.ts
import { api } from './api';

// Fetch all appointments (GET /appointments)
export async function getAppointments() {
  const res = await api.get('/appointments');
  return res.data;
}

// Fetch single appointment by ID (GET /appointments/:id)
export async function getAppointmentById(id: string) {
  const res = await api.get(`/appointments/${id}`);
  return res.data;
}

// Book (create) a new appointment (POST /appointments)
export async function bookAppointment(payload: {
  patientId: string;
  doctorId: string;
  timeSlot: string;
  reason?: string;
}) {
  const res = await api.post('/appointments', payload);
  return res.data;
}

// Update appointment status (PATCH /appointments/:id/status)
export async function updateAppointmentStatus(id: string, status: string) {
  const res = await api.patch(`/appointments/${id}/status`, { status });
  return res.data;
}

// Cancel appointment (PATCH /appointments/:id/cancel)
export async function cancelAppointment(id: string) {
  const res = await api.patch(`/appointments/${id}/cancel`);
  return res.data;
}

// Delete appointment (DELETE /appointments/:id)
export async function deleteAppointment(id: string) {
  const res = await api.delete(`/appointments/${id}`);
  return res.data;
}
