const statusCodes = require('./statusCodes');
const messages = require('./messages');

const createResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    statusCode,
    message,
    data,
  });
};

const sendSuccess = (res, data, message = messages.SUCCESS, statusCode = statusCodes.OK) => {
  return createResponse(res, statusCode, message, data);
};

const sendError = (res, message = messages.INTERNAL_ERROR, statusCode = statusCodes.INTERNAL_SERVER_ERROR, data = null) => {
  return createResponse(res, statusCode, message, data);
};

module.exports = {
  sendSuccess,
  sendError,
};
