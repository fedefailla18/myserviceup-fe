import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createServiceRequest, getServiceTypes } from '../services/api';

interface ServiceType {
  id: string;
  name: string;
}

const ServiceRequestForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceTypeId, setServiceTypeId] = useState('');
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const types = await getServiceTypes();
        setServiceTypes(types);
      } catch (err) {
        setError('Failed to load service types');
      }
    };
    fetchServiceTypes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createServiceRequest({ title, description, serviceTypeId });
      setTitle('');
      setDescription('');
      setServiceTypeId('');
      setError('');
      alert('Service request created successfully!');
    } catch (err) {
      setError('Failed to create service request. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create Service Request
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        multiline
        rows={4}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="service-type-label">Service Type</InputLabel>
        <Select
          labelId="service-type-label"
          value={serviceTypeId}
          onChange={(e) => setServiceTypeId(e.target.value)}
          required
        >
          {serviceTypes.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit Request
      </Button>
    </Box>
  );
};

export default ServiceRequestForm;