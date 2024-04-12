import { createContext, useReducer, useContext, useEffect } from 'react';
import { fetchUserProfile } from '../api/auth';
import React, { ReactNode } from 'react';


interface User {
  id: string;
  name: string;
  email: string;

}

interface AuthProviderProps {
  children: ReactNode;
}


interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token)
        .then((user) => {
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        })
        .catch((error) => {
          console.error('Failed to fetch user profile:', error);
          localStorage.removeItem('token');
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);