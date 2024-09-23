import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Unauthorized: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Unauthorized Access
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You do not have permission to access this page.
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized;