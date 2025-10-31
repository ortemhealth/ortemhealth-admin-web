import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Box, Typography, Paper, TextField, Button, Avatar } from '@mui/material';
import { getProfile, updateProfile } from '../services/profile';

export default function ProfilePage() {
  const [profile, setProfile] = useState({ name: '', email: '', avatarUrl: '' });
  const [password, setPassword] = useState('');

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  const handleSave = async () => {
    await updateProfile({ ...profile, password: password || undefined });
    setPassword('');
    // Add toast: "Profile updated"
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Profile & Settings</Typography>
          <Paper sx={{ p: 3, maxWidth: 400 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src={profile.avatarUrl} sx={{ width: 56, height: 56, mr: 2 }} />
              <TextField
                label="Avatar URL"
                value={profile.avatarUrl}
                onChange={e => setProfile({ ...profile, avatarUrl: e.target.value })}
                fullWidth
                size="small"
              />
            </Box>
            <TextField
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
              value={profile.name}
              onChange={e => setProfile({ ...profile, name: e.target.value })}
            />
            <TextField
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
              value={profile.email}
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Leave blank to keep current"
            />
            <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
              Save
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
