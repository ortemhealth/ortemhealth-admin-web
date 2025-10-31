import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Select, MenuItem } from '@mui/material';
import { useLocation } from '../contexts/LocationContext';

const LOCATIONS = ["Main Clinic", "Branch 1", "Branch 2"];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { location, setLocation } = useLocation();

  const handleLogin = async () => {
    // send API request including the selected location/branch
    // Example:
    // loginAPI(email, password, location)
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={3}>Admin Login</Typography>
        <Select
          value={location}
          onChange={e => setLocation(e.target.value)}
          displayEmpty
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ 'aria-label': 'Select clinic location' }}
        >
          <MenuItem value=""><em>Select Location</em></MenuItem>
          {LOCATIONS.map(loc => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
        </Select>
        <TextField fullWidth label="Email" sx={{ mb: 2 }} value={email} onChange={e => setEmail(e.target.value)}/>
        <TextField fullWidth type="password" label="Password" sx={{ mb: 2 }} value={password} onChange={e => setPassword(e.target.value)}/>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
      </Paper>
    </Box>
  );
}
