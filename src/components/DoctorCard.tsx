import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function DoctorCard({ doctor }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: '#23289d', mb: 1 }}>
          <LocalHospitalIcon />
        </Avatar>
        <Typography variant="h6">{doctor.name}</Typography>
        <Typography variant="body2" color="textSecondary">{doctor.specialty}</Typography>
        <Typography variant="body2" color="textSecondary">{doctor.email}</Typography>
      </CardContent>
    </Card>
  );
}

