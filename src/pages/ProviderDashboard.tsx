import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ProviderDashboard = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Service Provider Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your service provider dashboard. Here you can view open requests and manage your services.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProviderDashboard;