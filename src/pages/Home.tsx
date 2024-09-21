import React from 'react'
import { Container, Typography, Box } from '@mui/material'

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Service App
        </Typography>
        <Typography variant="body1">
          Find the services you need or offer your skills to others.
        </Typography>
      </Box>
    </Container>
  )
}

export default Home