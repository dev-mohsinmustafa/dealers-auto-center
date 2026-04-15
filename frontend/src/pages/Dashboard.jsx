import React, { useEffect, useState } from 'react';
import { useVehicleContext } from '../context/VehicleContext';
import useDebounce from '../hooks/useDebounce';
import VehicleCard from '../components/common/VehicleCard';
import './Dashboard.css';

const Dashboard = () => {
  const { vehicles, loading, error, totalPages, fetchVehicles } = useVehicleContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(''); // e.g., 'price-asc', 'name-desc'
  const [currentPage, setCurrentPage] = useState(1);
  
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    let sort = '';
    let order = 'asc';

    if (sortOption) {
      [sort, order] = sortOption.split('-');
    }

    fetchVehicles(debouncedSearch, sort, order, currentPage);
  }, [debouncedSearch, sortOption, currentPage, fetchVehicles]);

  // Reset to first page when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortOption]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="dashboard container">
      <div className="dashboard-header animate-fade-in">
        <h1>Vehicle Inventory</h1>
        <p className="subtitle">Discover our premium selection of vehicles</p>
      </div>

      <div className="controls-bar animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input search-input"
          />
        </div>
        <div className="sort-box">
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
            className="form-input sort-select"
          >
            <option value="">Default Sorting</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="error-state">
          <p>{error}</p>
          <button className="btn" onClick={() => fetchVehicles()}>Try Again</button>
        </div>
      )}

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading inventory...</p>
        </div>
      ) : (
        <>
          {vehicles.length === 0 ? (
            <div className="empty-state">
              <p>No vehicles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid-layout">
              {vehicles.map((vehicle, index) => (
                <div key={vehicle.id} style={{ animationDelay: `${0.1 * (index % 10)}s` }} className="animate-fade-in">
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          )}
          
          {totalPages > 1 && (
            <div className="pagination-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button 
                className="btn btn-outline page-btn" 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="btn btn-outline page-btn" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
