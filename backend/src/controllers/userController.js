const userService = require('../services/userService');
const { sendSuccess } = require('../utils/responseHandler');
const statusCodes = require('../utils/statusCodes');
const messages = require('../utils/messages');

class UserController {
  async register(req, res, next) {
    try {
      // Pass strictly body values to the service domain logic
      const userData = req.body;
      const createdUser = await userService.registerUser(userData);
      
      return sendSuccess(res, createdUser, messages.CREATED, statusCodes.CREATED);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
