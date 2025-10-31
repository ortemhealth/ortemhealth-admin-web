import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const menu = [
  { text: 'Dashboard', icon: <DashboardIcon />, link: '/' },
  { text: 'Appointments', icon: <CalendarTodayIcon />, link: '/appointments' },
  { text: 'Patients', icon: <PeopleIcon />, link: '/patients' },
  { text: 'Doctors', icon: <PeopleIcon />, link: '/doctors' },
  { text: 'Payments', icon: <PaymentsIcon />, link: '/payments' },
  { text: 'Notifications', icon: <NotificationsIcon />, link: '/notifications' },
  { text: 'Analytics', icon: <AssessmentIcon />, link: '/analytics' },
  { text: 'Staff', icon: <PeopleIcon />, link: '/staff' },
  { text: 'Settings', icon: <SettingsIcon />, link: '/settings' },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menu.map(({ text, icon, link }) =>
          <ListItem button component="a" href={link} key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
}

