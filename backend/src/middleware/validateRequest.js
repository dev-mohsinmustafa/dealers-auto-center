const { sendError } = require('../utils/responseHandler');
const statusCodes = require('../utils/statusCodes');
const messages = require('../utils/messages');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const formattedErrors = error.details.map((detail) => ({
        field: detail.path[0],
        message: detail.message,
      }));
      
      return sendError(res, messages.VALIDATION_ERROR, statusCodes.BAD_REQUEST, formattedErrors);
    }
    next();
  };
};

module.exports = validateRequest;
