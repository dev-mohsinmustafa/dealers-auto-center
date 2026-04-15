const express = require('express');
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');
const { registerUserSchema, loginUserSchema } = require('../validations/userValidation');

const router = express.Router();

// Middleware ensures validation rules pass before hitting controller
router.post('/register', validateRequest(registerUserSchema), userController.register);
router.post('/login', validateRequest(loginUserSchema), userController.login);

module.exports = router;
