'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { registerSchema } from '@/lib/validationSchemas';
import { register as registerAPI } from '@/lib/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError('');
    setSubmitting(true);

    try {
      let mobile = '';
      let mobile_country_code = '';
      
      if (values.phone) {
        try {
          const phoneNumber = parsePhoneNumber(values.phone);
          if (phoneNumber) {
            mobile_country_code = phoneNumber.countryCallingCode;
            mobile = phoneNumber.nationalNumber;
          } else {
            const phoneStr = values.phone.replace(/\s/g, '');
            const match = phoneStr.match(/^\+(\d{1,3})(.+)$/);
            if (match) {
              mobile_country_code = match[1];
              mobile = match[2];
            }
          }
        } catch (parseError) {
          const phoneStr = values.phone.replace(/\s/g, '');
          const match = phoneStr.match(/^\+(\d{1,3})(.+)$/);
          if (match) {
            mobile_country_code = match[1];
            mobile = match[2];
          }
        }
      }

      const response = await registerAPI({
        name: values.fullName,
        email: values.email,
        mobile: mobile,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
        mobile_country_code: mobile_country_code,
      });

      if (response.status && response.data) {
        localStorage.setItem('token', response.data.token);
        router.push('/verify');
      } else {
        setError(response.message || 'Registration failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#020202]">
            Create your account
          </h2>
        </div>

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={registerSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => (
              <Form className="mt-8 space-y-6">
                {error && (
                  <div className="bg-[#F5F5F5] border border-[#BE968E] text-[#020202] px-4 py-3 rounded relative">
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#545454]">
                      Full Name
                    </label>
                    <Field
                      name="fullName"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-[#545454] rounded-md shadow-sm placeholder-[#545454] focus:outline-none focus:ring-[#BE968E] focus:border-[#BE968E] sm:text-sm text-[#020202]"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="mt-1 text-sm text-[#BE968E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#545454]">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-[#545454] rounded-md shadow-sm placeholder-[#545454] focus:outline-none focus:ring-[#BE968E] focus:border-[#BE968E] sm:text-sm text-[#020202]"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-[#BE968E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#545454]">
                      Phone Number
                    </label>
                    <Field name="phone">
                      {({ field, form, meta }) => (
                        <div>
                          <div className="mt-1 phone-input-container">
                            <PhoneInput
                              international
                              defaultCountry="AE"
                              value={field.value}
                              onChange={(value) => {
                                form.setFieldValue('phone', value || '');
                              }}
                              onBlur={() => {
                                form.setFieldTouched('phone', true);
                              }}
                            />
                          </div>
                          {meta.touched && meta.error && (
                            <div className="mt-1 text-sm text-[#BE968E]">{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#545454]">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-[#545454] rounded-md shadow-sm placeholder-[#545454] focus:outline-none focus:ring-[#BE968E] focus:border-[#BE968E] sm:text-sm text-[#020202]"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-1 text-sm text-[#BE968E]"
                  />
                </div>

                <div>
                  <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-[#545454]">
                    Confirm Password
                  </label>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-[#545454] rounded-md shadow-sm placeholder-[#545454] focus:outline-none focus:ring-[#BE968E] focus:border-[#BE968E] sm:text-sm text-[#020202]"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="mt-1 text-sm text-[#BE968E]"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#BE968E] hover:bg-[#a8857d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE968E] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>

              <div className="text-center">
                <a
                  href="/login"
                  className="text-sm text-[#BE968E] hover:text-[#a8857d]"
                >
                  Already have an account? Login
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

