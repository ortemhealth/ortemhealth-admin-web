import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

export default function NotificationBanner() {
  // This could be pulled from props/context/remote config
  const banner = {
    type: "info",
    title: "Update!",
    message: "System maintenance on Sunday, 1am-2am. All features operational now.",
  };
  return (
    <Alert severity={banner.type as "info" | "warning" | "success" | "error"}>
      <AlertTitle>{banner.title}</AlertTitle>
      {banner.message}
    </Alert>
  );
}

