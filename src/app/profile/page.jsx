'use client';

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const Profile = () => {
  const { isAuthenticated, isLoading, user } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect('/api/auth/login'); // Redirect to login page if not authenticated
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div className='grid justify-items-center mt-7'>
        <h1 className='font-semibold'>Loading...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Optional: A fallback UI while redirection happens
    return null;
  }

  return (
    <div className="mt-24 flex items-center justify-center">
      <div className="text-center p-8  shadow-md rounded-md">
        <h1 className="font-semibold text-3xl mb-4">
          Welcome to your profile!
        </h1>
        <p className="text-lg ">
          Hey, {user?.given_name}! Glad to see you here.
        </p>
      </div>
    </div>
  );
};

export default Profile;
