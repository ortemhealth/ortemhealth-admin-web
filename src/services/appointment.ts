import axios from 'axios';
export async function getAppointments() {
  const res = await axios.get('https://api.ortemhealth.com/appointments');
  return res.data;
}

