import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  token: string;
}

export async function loginUser(email: string, password: string): Promise<string> {
  const response = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/login`, {
    email,
    password,
  });
  return response.data.token;
}

export async function fetchUserProfile(token: string): Promise<User> {
  const response = await axios.get<User>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}