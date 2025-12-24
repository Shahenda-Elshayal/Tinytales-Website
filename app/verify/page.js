'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { verifySchema } from '@/lib/validationSchemas';
import { verifyEmail, resendVerificationCode, getUserData } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';

export default function VerifyPage() {
  const router = useRouter();
  const { login: setAuth } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleVerify = async (values, { setSubmitting }) => {
    setLoading(true);
    setError('');
    setSubmitting(true);

    try {
      const response = await verifyEmail(values.code);

      if (response.status) {
        try {
          const userResponse = await getUserData();
          if (userResponse.status && userResponse.data) {
            const token = localStorage.getItem('token');
            setAuth(token, userResponse.data);
            router.push('/welcome');
          } else {
            router.push('/welcome');
          }
        } catch (userErr) {
          router.push('/welcome');
        }
      } else {
        setError(response.message || 'Verification failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          'Verification failed. Please check your code.';
      setError(errorMessage);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setResendSuccess(false);
    setError('');

    try {
      const response = await resendVerificationCode();
      
      if (response.status) {
        setResendSuccess(true);
        setTimeout(() => setResendSuccess(false), 5000);
      } else {
        setError('Failed to resend code. Please try again.');
      }
    } catch (err) {
      setError('Failed to resend code. Please try again.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#020202]">
            Verify your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#545454]">
            Enter the verification code sent to your email
          </p>
        </div>

        <Formik
          initialValues={{
            code: '',
          }}
          validationSchema={verifySchema}
          onSubmit={handleVerify}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              {error && (
                <div className="bg-[#F5F5F5] border border-[#BE968E] text-[#020202] px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {resendSuccess && (
                <div className="bg-[#F5F5F5] border border-[#BE968E] text-[#020202] px-4 py-3 rounded relative">
                  <span className="block sm:inline">Verification code resent successfully!</span>
                </div>
              )}

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-[#545454]">
                  Verification Code
                </label>
                <Field
                  name="code"
                  type="text"
                  maxLength={6}
                  className="mt-1 block w-full px-3 py-2 border border-[#545454] rounded-md shadow-sm placeholder-[#545454] focus:outline-none focus:ring-[#BE968E] focus:border-[#BE968E] sm:text-sm text-center text-2xl tracking-widest font-mono text-[#020202]"
                  placeholder="123456"
                />
                <ErrorMessage
                  name="code"
                  component="div"
                  className="mt-1 text-sm text-[#BE968E]"
                />
                <p className="mt-2 text-xs text-[#545454] text-center">
                  Test code: <span className="font-mono font-semibold">123456</span>
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#BE968E] hover:bg-[#a8857d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE968E] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Verifying...' : 'Verify'}
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resending}
                  className="text-sm text-[#BE968E] hover:text-[#a8857d] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resending ? 'Resending...' : "Didn't receive code? Resend"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

