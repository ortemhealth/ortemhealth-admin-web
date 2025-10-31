import { api } from './api';

// Get all patients
export async function getPatients() {
  const res = await api.get('/patients');
  return res.data;
}

// Add patient
export async function addPatient(patient: { name: string, dob: string, email: string }) {
  const res = await api.post('/patients', patient);
  return res.data;
}

// Get patient by ID
export async function getPatientById(id: string) {
  const res = await api.get(`/patients/${id}`);
  return res.data;
}

// Edit or archive (can add as needed)

