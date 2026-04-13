import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const vehicleApi = {
  getVehicles: (params) => api.get('/vehicles', { params }),
};

export const userApi = {
  register: (data) => api.post('/users/register', data),
};

export default api;
