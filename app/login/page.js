'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '@/lib/validationSchemas';
import { login as loginAPI, getUserData } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login: setAuth } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError('');
    setSubmitting(true);

    try {
      const response = await loginAPI(values.email, values.password);

      if (response.status && response.data) {
        const token = response.data.token;
        localStorage.setItem('token', token);

        setAuth(token, response.data);

        try {
          const userResponse = await getUserData();
          if (userResponse.status && userResponse.data) {
            router.push('/welcome');
          } else {
            router.push('/welcome');
          }
        } catch (userErr) {
          router.push('/welcome');
        }
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          'Login failed. Please check your credentials.';
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
            Sign in to your account
          </h2>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              {error && (
                <div className="bg-[#F5F5F5] border border-[#BE968E] text-[#020202] px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <div className="space-y-4">
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
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#BE968E] hover:bg-[#a8857d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE968E] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>

              <div className="text-center">
                <a
                  href="/register"
                  className="text-sm text-[#BE968E] hover:text-[#a8857d]"
                >
                  Don't have an account? Register
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

