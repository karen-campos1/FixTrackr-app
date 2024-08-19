import React, { createContext, useContext, useState, ReactNode } from 'react';
import Auth0 from 'react-native-auth0';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

interface AuthContextType {
  user: any;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
      });
      const userInfo = await auth0.auth.userInfo({ token: credentials.accessToken });
      setUser(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
