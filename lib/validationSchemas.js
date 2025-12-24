import * as Yup from 'yup';

// Registration form validation schema
export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must not exceed 50 characters'),
  
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  phone: Yup.string()
    .required('Phone number is required')
    .test('phone-format', 'Please enter a valid phone number', (value) => {
      // Check if value exists
      if (!value || value.trim() === '') return false;
      // Phone number should have at least country code + number
      // Format: +[country code][number] or +[country code] [number]
      const cleaned = value.replace(/\s/g, ''); // Remove spaces
      // Minimum length: +1 (country code) + 4 (number) = 5, but we'll require at least 7 for a valid number
      return cleaned.length >= 7 && cleaned.startsWith('+');
    }),
  
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  
  passwordConfirmation: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

// Login form validation schema
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .required('Password is required'),
});

// Verification code validation schema
export const verifySchema = Yup.object().shape({
  code: Yup.string()
    .required('Verification code is required')
    .length(6, 'Verification code must be 6 digits')
    .matches(/^\d+$/, 'Verification code must contain only numbers'),
});

