import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface KPIProps {
  title: string;
  value: string | number;
}
export default function KPIWidget({ title, value }: KPIProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

