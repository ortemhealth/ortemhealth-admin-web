import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import NotificationBanner from '../components/NotificationBanner';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getNotifications, markNotificationRead } from '../services/notification';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications().then(setNotifications);
  }, []);

  const handleMarkRead = async (id: string) => {
    await markNotificationRead(id);
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Notifications</Typography>
          <NotificationBanner />
          <Paper elevation={2}>
            <List>
              {notifications.length === 0 && <ListItem><ListItemText primary="No notifications." /></ListItem>}
              {notifications.map(notification => (
                <ListItem
                  key={notification.id}
                  sx={{ bgcolor: notification.read ? 'white' : '#e3f2fd' }}
                  secondaryAction={!notification.read && (
                    <Badge color="primary" variant="dot" />
                  )}
                  button
                  onClick={() => handleMarkRead(notification.id)}
                >
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={notification.title}
                    secondary={notification.message}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

