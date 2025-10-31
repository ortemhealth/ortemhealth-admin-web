import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PaymentTable from '../components/PaymentTable';
import { Box, Typography } from '@mui/material';

export default function PaymentsPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Payments & Revenue</Typography>
          <PaymentTable />
        </Box>
      </Box>
    </Box>
  );
}

