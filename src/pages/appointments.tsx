import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AppointmentTable from '../components/AppointmentTable';
import { Box, Typography, Button, Modal } from '@mui/material';

export default function AppointmentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Appointments</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            + Book New Appointment
          </Button>
          <Box mt={4}>
            <AppointmentTable />
          </Box>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2
            }}>
              {/* Add appointment booking form here */}
              <Typography variant="h6" mb={2}>Book Appointment</Typography>
              {/* Example: patient, doctor, date, time, reason fields */}
              {/* On submit, call booking API, close modal. */}
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}
