import React, { createContext, useContext, useState, useCallback } from 'react';
import { vehicleApi } from '../api';

const VehicleContext = createContext();

export const useVehicleContext = () => useContext(VehicleContext);

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicles = useCallback(async (searchQuery = '', sort = '', order = 'asc') => {
    setLoading(true);
    setError(null);
    try {
      const response = await vehicleApi.getVehicles({ search: searchQuery, sort, order });
      setVehicles(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch vehicles');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, loading, error, fetchVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};
