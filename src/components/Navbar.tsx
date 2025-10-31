import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, Select, MenuItem } from '@mui/material';
import { useLocation } from '../contexts/LocationContext';

const LOCATIONS = ["Main Clinic", "Branch 1", "Branch 2"];

export default function Navbar() {
  const { location, setLocation } = useLocation();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="inherit">OrtemHealth Admin</Typography>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Select
            value={location}
            onChange={e => setLocation(e.target.value)}
            size="small"
            displayEmpty
            sx={{ bgcolor: 'white', minWidth: 140 }}
            inputProps={{ 'aria-label': 'Select clinic location' }}
          >
            <MenuItem value=""><em>Select Location</em></MenuItem>
            {LOCATIONS.map(loc => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
          </Select>
        </Box>
        <Avatar src="/assets/doctor-avatar.png" sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
}
