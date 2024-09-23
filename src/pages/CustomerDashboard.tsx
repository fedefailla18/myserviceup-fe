import React from 'react';
import { Container, Typography, Box, Link, Button } from '@mui/material';
import { Link as link } from 'react-router-dom';

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
        <Typography variant="body1">
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/request-service" variant="body2">
              {"Request a Service"}
            </Link>
          </Box>
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button color="inherit" component={link} to={"/request-service"}>Request a Service</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CustomerDashboard;