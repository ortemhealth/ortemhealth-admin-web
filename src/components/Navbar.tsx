import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="inherit">
            OrtemHealth Admin
          </Typography>
        </Box>
        <Avatar src="/assets/doctor-avatar.png" sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
}

