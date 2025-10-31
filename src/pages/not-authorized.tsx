import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotAuthorized() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h5" color="error">
        You are not authorized to view this page.
      </Typography>
    </Box>
  );
}
