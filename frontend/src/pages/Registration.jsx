import React, { useState } from 'react';
import Input from '../components/common/Input';
import { userApi } from '../api';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required.';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = 'Phone Number is required.';
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required.';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field as user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await userApi.register(formData);
        if (response.data.success) {
          setSuccessMessage('Registration successful! Welcome aboard.');
          setFormData({ fullName: '', email: '', phoneNumber: '', password: '' });
          setErrors({});
        }
      } catch (err) {
        if (err.response && err.response.status === 400 && Array.isArray(err.response.data.data)) {
          // Map backend validation errors to frontend
          const backendErrors = {};
          err.response.data.data.forEach(error => {
            backendErrors[error.field] = error.message;
          });
          setErrors(backendErrors);
        } else {
          setErrors({ global: err.response?.data?.message || 'Something went wrong. Please try again.' });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="registration-container container animate-fade-in">
      <div className="registration-card">
        <div className="registration-header">
          <h2>Create an Account</h2>
          <p>Join Dealers Auto Center to get the best deals.</p>
        </div>

        {successMessage && (
          <div className="success-message animate-fade-in">
            {successMessage}
          </div>
        )}

        {errors.global && (
          <div className="error-message global-error animate-fade-in" style={{ padding: '1rem', background: '#fee2e2', borderRadius: '8px', marginBottom: '1rem' }}>
            {errors.global}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="Full Name"
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            id="phoneNumber"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Min 6 characters"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
