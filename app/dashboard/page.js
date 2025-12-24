'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getUserData } from '@/lib/auth';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RatingReviews from '@/components/product/RatingReviews';
import SimilarItems from '@/components/product/SimilarItems';
import Footer from '@/components/layout/Footer';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Redirect if no token
    if (!token) {
      router.push('/login');
      return;
    }

    // Fetch user data (matches Postman: GET /auth/user-data)
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Breadcrumb />
      
      {/* Product Details Content */}
      <main className="bg-white mt-10">
        <div className="mx-5 md:mx-[120px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-5">
            {/* Product Image Gallery */}
            <div className="w-full">
              <ProductImageGallery />
            </div>

            {/* Product Information */}
            <div className="w-full">
              <ProductInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Rating and Reviews */}
      <RatingReviews />

      {/* Similar Items */}
      <SimilarItems />

      {/* Footer */}
      <Footer />
    </div>
  );
}

