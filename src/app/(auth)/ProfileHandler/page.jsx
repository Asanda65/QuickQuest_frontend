'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Loader from '../../../components/Loader';

export default function ProfileHandler() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayFetch = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Add a 2-second delay
      const handleRedirect = async () => {
        const params = searchParams.get('token');
        if (params) {
          setToken(params);
        }

        if (token) {
          try {
            // Store the token in localStorage
            localStorage.setItem('token', token);

            // Fetch the user profile
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/profile`, {
              headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`,
              },
            });

            const fetchedProfile = response.data;
            console.log(response);

            // Store the profile in localStorage
            localStorage.setItem('user', JSON.stringify(fetchedProfile));

            // Handle redirection based on the profile status
            if (fetchedProfile.status === 'GOOGLEAUTH') {
              router.push('/ssoSignup');
            } else if (fetchedProfile.status === 'VERIFIED') {
              router.push('/home');
            }
          } catch (error) {
            console.error('Error fetching user profile:', error);
            router.push('/error'); // Redirect to an error page if needed
          }
        }
      };

      // Call the handleRedirect function after the delay
      handleRedirect();
    };

    // Call the delayFetch function when the component mounts
    delayFetch();
  }, [searchParams, token]);

  return <Loader />;
}