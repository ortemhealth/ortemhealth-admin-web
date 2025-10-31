import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function EmptyState({ section = "appointments", onAdd }) {
  const messages = {
    "appointments": "No appointments scheduled. Book your first appointment now!",
    "patients": "No patients found. Start by adding a patient.",
    "doctors": "No doctors yet. Invite your first doctor to get started."
  };

  return (
    <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#f7f7fa', borderRadius: 2 }}>
      <Image src="/assets/empty-state.svg" alt="No Data" width={110} height={110} />
      <Typography variant="h6" mt={2}>{messages[section] || "No data yet!"}</Typography>
      <Button sx={{ mt: 2 }} variant="contained" onClick={onAdd}>Add</Button>
    </Box>
  );
}
