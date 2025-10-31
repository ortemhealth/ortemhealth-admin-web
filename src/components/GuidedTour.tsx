import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

export default function GuidedTour({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper', p: 4, borderRadius: 2, maxWidth: 400,
      }}>
        <Typography variant="h6" mb={2}>Welcome to OrtemHealth Admin!</Typography>
        <Typography>Use the sidebar to access all modules.</Typography>
        <Typography mt={2}>- Appointments: manage bookings<br/>
        - Doctors/Patients: team and clinic details<br/>
        - Payments/Analytics: revenue dashboard<br/>
        - Notifications/Staff/Settings: keep your clinic humming!</Typography>
        <Button sx={{ mt: 3 }} onClick={handleClose} variant="contained">Got it!</Button>
      </Box>
    </Modal>
  );
}
