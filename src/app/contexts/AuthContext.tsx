'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface User {
  location: {
    type: string;
    coordinates: number[];
  };
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  aboutMe: string;
  services: any[];
  type: string;
  status: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
          console.error('No token found');
          setLoading(false);
          return;
        }
  
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${storedToken}`
          }
        });
  
        if (data) {
          setUser(data.user); // Assuming the response has a user object
        }
      } catch (error) {
        console.error('Error retrieving user from API:', error);
      } finally {
        setLoading(false);
      }
    };
  
    checkUserAuthentication();
  }, []);

  useEffect(() => {
    // Check if user status is UNVERIFIED and redirect to verifyEmail page
    if (user && user.status === 'UNVERIFIED') {
      router.push('/verifyEmail');
    }else if (user?.type === 'WORKER'){
      router.push('https://worker.quick-quest.vercel.app/login');
    }
    
  }, [user, router]);

  useEffect(() => {
    // Update local storage whenever user state changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};