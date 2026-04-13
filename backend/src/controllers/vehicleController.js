const vehicleService = require('../services/vehicleService');
const { sendSuccess } = require('../utils/responseHandler');

class VehicleController {
  async getVehicles(req, res, next) {
    try {
      const { search, sort, order } = req.query;
      
      // Control layer passes clean params to Service
      const vehicles = await vehicleService.getVehicles(search, sort, order);
      
      // Control layer returns response
      return sendSuccess(res, vehicles, 'Vehicles fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VehicleController();
