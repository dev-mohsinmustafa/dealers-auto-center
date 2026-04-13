const express = require('express');
const cors = require('cors');
const config = require('./config');
const errorHandler = require('./middleware/errorHandler');

const vehicleRoutes = require('./routes/vehicleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Main entry point for API routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);

// Centralized error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Backend Server running on port ${config.port} in ${config.env} mode`);
});
