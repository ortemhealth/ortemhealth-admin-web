import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function PatientCard({ patient }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: '#00a896', mb: 1 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h6">{patient.name}</Typography>
        <Typography variant="body2" color="textSecondary">{patient.dob}</Typography>
        <Typography variant="body2" color="textSecondary">{patient.email}</Typography>
      </CardContent>
    </Card>
  );
}

