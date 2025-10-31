import { api } from './api';

// Get all doctors
export async function getDoctors() {
  const res = await api.get('/doctors');
  return res.data;
}

// Add doctor
export async function addDoctor(doctor: { name: string, specialty: string, email: string }) {
  const res = await api.post('/doctors', doctor);
  return res.data;
}

// Get doctor by ID
export async function getDoctorById(id: string) {
  const res = await api.get(`/doctors/${id}`);
  return res.data;
}

// Edit or remove (can add as needed)

