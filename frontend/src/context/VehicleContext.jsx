import React, { createContext, useContext, useState, useCallback } from 'react';
import { vehicleApi } from '../api';

const VehicleContext = createContext();

export const useVehicleContext = () => useContext(VehicleContext);

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicles = useCallback(async (searchQuery = '', sort = '', order = 'asc', page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await vehicleApi.getVehicles({ search: searchQuery, sort, order, page, limit: 6 });
      setVehicles(response.data.data.items);
      setTotalPages(response.data.data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch vehicles');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, loading, error, totalPages, fetchVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};
