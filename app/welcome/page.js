'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserData } from '@/lib/auth';

export default function WelcomePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('User');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.push('/login');
      return;
    }

    getUserData()
      .then((response) => {
        if (response.status && response.data) {
          setUserName(response.data.name || 'User');
        } else {
          setUserName('User');
        }
      })
      .catch((err) => {
        setUserName('User');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BE968E] mx-auto"></div>
          <p className="mt-4 text-[#545454]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center mx-4">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-[#BE968E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#020202] mb-4">
          Welcome, {userName}!
        </h1>
        <p className="text-[#545454] mb-8">
          You have successfully logged in to your account.
        </p>
        <button
          onClick={handleGoToDashboard}
          className="w-full bg-[#BE968E] hover:bg-[#a8857d] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE968E]"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

