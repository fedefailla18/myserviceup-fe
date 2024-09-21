import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Typography, Box, Link } from '@mui/material'
import { RootState } from '../store/store'

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome, {user}! This is your dashboard.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
            <Link href="/register" variant="body2">
              {"Already have an account? register"}
            </Link>
          </Box>
    </Container>
  )
}

export default Dashboard