export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  avatarUrl?: string;
}
export interface Patient {
  id: string;
  name: string;
  dob: string;
  email: string;
  avatarUrl?: string;
}
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  timeSlot: string;
  status: string;
}
export interface Payment {
  id: string;
  amount: number;
  patientName: string;
  method: 'UPI' | 'Card' | 'Cash' | string;
  date: string;
  status: string;
}
export interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface Message {
  sender: string;
  message: string;
  time: string;
}
