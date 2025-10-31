import { api } from './api';

// Fetch list of payments
export async function getPayments() {
  const res = await api.get('/payments');
  return res.data;
}

// Fetch single payment by ID
export async function getPaymentById(id: string) {
  const res = await api.get(`/payments/${id}`);
  return res.data;
}

// Refund payment
export async function refundPayment(id: string) {
  const res = await api.post(`/payments/${id}/refund`);
  return res.data;
}

