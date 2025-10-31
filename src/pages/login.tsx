import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { login as loginAPI } from '../services/auth';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { token, user } = await loginAPI(email, password);
      login(token, user);
      router.push('/');
    } catch (e) {
      setErr('Invalid credentials. Try again.');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={3}>Admin Login</Typography>
        <TextField fullWidth label="Email" sx={{ mb: 2 }} value={email} onChange={e => setEmail(e.target.value)}/>
        <TextField fullWidth type="password" label="Password" sx={{ mb: 2 }} value={password} onChange={e => setPassword(e.target.value)}/>
        {err && <Typography color="error" mb={2}>{err}</Typography>}
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
      </Paper>
    </Box>
  );
}
