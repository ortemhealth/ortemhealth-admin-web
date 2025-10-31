import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Box, Typography, Grid } from '@mui/material';
import KPIWidget from '../components/KPIWidget';
import EarningsChart from '../components/EarningsChart';
import BookingsChart from '../components/BookingsChart';
import NoShowPieChart from '../components/NoShowPieChart';

export default function AnalyticsPage() {
  // In a real app, fetch these via analytics API
  const [kpi, setKpi] = useState({
    totalAppointments: 1342,
    completed: 1261,
    noShows: 81,
    revenue: 723000,
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Analytics & Reporting</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}><KPIWidget title="Total Appointments" value={kpi.totalAppointments} /></Grid>
            <Grid item xs={12} sm={3}><KPIWidget title="Completed" value={kpi.completed} /></Grid>
            <Grid item xs={12} sm={3}><KPIWidget title="No-shows" value={kpi.noShows} /></Grid>
            <Grid item xs={12} sm={3}><KPIWidget title="Total Revenue" value={`₹${kpi.revenue}`} /></Grid>
          </Grid>
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} sm={8}><BookingsChart /></Grid>
            <Grid item xs={12} sm={4}><NoShowPieChart /></Grid>
            <Grid item xs={12}><EarningsChart /></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

