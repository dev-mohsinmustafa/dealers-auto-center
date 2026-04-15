import React, { useState } from 'react';
import Input from '../components/common/Input';
import { userApi } from '../api';
import './Registration.css'; // Reusing the identical layout and glowing card aesthetics

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required.';
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
        const response = await userApi.login(formData);
        if (response.data.success) {
          setSuccessMessage('Login successful! Welcome back.');
          setFormData({ email: '', password: '' });
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
          setErrors({ global: err.response?.data?.message || 'Invalid email or password.' });
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
          <h2>Welcome Back</h2>
          <p>Login to your Dealers Auto Center account.</p>
        </div>

        {successMessage && (
          <div className="success-message animate-fade-in">
            {successMessage}
          </div>
        )}

        {errors.global && (
          <div className="error-message global-error animate-fade-in" style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', marginBottom: '1rem', color: '#fca5a5' }}>
            {errors.global}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
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
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
