import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080/api', })

api.interceptors.request.use((config) => { 
  const token = localStorage.getItem('token'); 
  if (token) { 
    config.headers.Authorization = `Bearer ${token}`;; 
  } 
  return config 
})

api.interceptors.response.use( (response) => { console.log('Response:', response); return response; }, (error) => { console.error('API Error:', error); return Promise.reject(error); } )

export const login = async (email: string, password: string) => { 
  try { 
    const response = await api.post('/auth/login', { email, password }); 
    return response.data; 
  } catch (error) { 
    console.error('Login error:', error); 
    throw error; 
  } 
}


export const register = async (email: string, password: string, userType: string) => {
  try {
    const response = await api.post('/auth/register', { email, password, userType });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const createServiceRequest = async (data: { title: string; description: string; serviceTypeId: string }) => {
  try {
    const response = await api.post('/service-requests', data);
    return response.data;
  } catch (error) {
    console.error('Error creating service request:', error);
    throw error;
  }
};

export const getServiceRequests = async () => {
  try {
    const response = await api.get('/service-requests/customer');
    return response.data;
  } catch (error) {
    console.error('Error fetching service requests:', error);
    throw error;
  }
};

export const getServiceTypes = async () => {
  try {
    const response = await api.get('/service-types');
    return response.data;
  } catch (error) {
    console.error('Error fetching service types:', error);
    throw error;
  }
};

export default api