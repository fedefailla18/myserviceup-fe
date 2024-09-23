import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CustomerDashboard = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Customer Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your customer dashboard. Here you can view and manage your service requests.
        </Typography>
      </Box>
    </Container>
  );
};

export default CustomerDashboard;