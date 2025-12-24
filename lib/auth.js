import api from './api';

/**
 * Register a new user
 * Based on Postman: POST /auth/register
 * Body: FormData with name, email, mobile, password, password_confirmation, mobile_country_code
 */
export const register = async (data) => {
  // Create FormData (as shown in Postman collection)
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('mobile', data.mobile);
  formData.append('password', data.password);
  formData.append('password_confirmation', data.password_confirmation);
  formData.append('mobile_country_code', data.mobile_country_code);

  const response = await api.post('/auth/register', formData);
  return response.data;
};

/**
 * Login user
 * Based on Postman: POST /auth/login
 * Body: FormData with email, password
 */
export const login = async (email, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await api.post('/auth/login', formData);
  return response.data;
};

/**
 * Verify email with code
 * Based on Postman: POST /auth/verify-email
 * Requires: Bearer token in header
 * Body: FormData with code
 */
export const verifyEmail = async (code) => {
  const formData = new FormData();
  formData.append('code', code);

  const response = await api.post('/auth/verify-email', formData);
  return response.data;
};

/**
 * Resend verification code
 * Based on Postman: POST /auth/verify-email/resend-code
 * Requires: Bearer token in header
 */
export const resendVerificationCode = async () => {
  const response = await api.post('/auth/verify-email/resend-code');
  return response.data;
};

/**
 * Get user data
 * Based on Postman: GET /auth/user-data
 * Requires: Bearer token in header
 */
export const getUserData = async () => {
  const response = await api.get('/auth/user-data');
  return response.data;
};

