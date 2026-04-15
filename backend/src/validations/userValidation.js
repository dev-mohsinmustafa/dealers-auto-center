const Joi = require('joi');

const registerUserSchema = Joi.object({
  fullName: Joi.string().required().messages({
    'string.empty': 'Full Name is required',
    'any.required': 'Full Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid format',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.empty': 'Phone Number is required',
    'any.required': 'Phone Number is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid format',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
};
