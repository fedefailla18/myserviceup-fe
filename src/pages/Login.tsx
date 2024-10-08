import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material'
import { login as loginAction } from '../store/authSlice'
import { login as loginApi } from '../services/api'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    setError('');
    e.preventDefault();
    try {
      const response = await loginApi(email, password);
      localStorage.setItem('token', response.jwt);
      const decodedToken = JSON.parse(atob(response.jwt.split('.')[1]));

      const role = decodedToken.roles[0];
      dispatch(loginAction({ email, role }));
      console.log('role + ' + role)
      navigate(role === 'ROLE_CUSTOMER' ? '/customer-dashboard' : '/provider-dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Link href="/register" variant="body2">
          {"Don't have an account? Register Here!"}
        </Link>
      </Box>
    </Container>
  )
}

export default Login