const { sendError } = require('../utils/responseHandler');
const statusCodes = require('../utils/statusCodes');
const messages = require('../utils/messages');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || messages.INTERNAL_ERROR;
  const data = err.data || null;

  console.error('[Error Handler]', err);

  return sendError(res, message, statusCode, data);
};

module.exports = errorHandler;
