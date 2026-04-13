import React from 'react';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card animate-fade-in">
      <div className="card-image-wrapper">
        <img src={vehicle.image} alt={vehicle.name} className="card-image" loading="lazy" />
        <div className="price-tag">${vehicle.price.toLocaleString()}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{vehicle.name}</h3>
        <p className="card-subtitle">Premium Quality</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline">View Details</button>
      </div>
    </div>
  );
};

export default VehicleCard;
