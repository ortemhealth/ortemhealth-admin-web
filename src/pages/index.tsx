import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import KPIWidget from '../components/KPIWidget';
import EarningsChart from '../components/EarningsChart';
import NotificationBanner from '../components/NotificationBanner';
import { Box, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <NotificationBanner />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <KPIWidget title="Today's Bookings" value="38" />
              <KPIWidget title="Patients Active" value="15" />
              <EarningsChart />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Side panel - upcoming appts, actions */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

