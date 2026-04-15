const vehicleService = require('../services/vehicleService');
const { sendSuccess } = require('../utils/responseHandler');

class VehicleController {
  async getVehicles(req, res, next) {
    try {
      const { search, sort, order, page = 1, limit = 6 } = req.query;
      
      // Control layer passes clean params to Service
      const result = await vehicleService.getVehicles(search, sort, order, parseInt(page, 10), parseInt(limit, 10));
      
      // Control layer returns response
      return sendSuccess(res, result, 'Vehicles fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VehicleController();
