const express = require('express');
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');
const { registerUserSchema } = require('../validations/userValidation');

const router = express.Router();

// Middleware ensures validation rules pass before hitting controller
router.post('/register', validateRequest(registerUserSchema), userController.register);

module.exports = router;
