import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/navigation/AppNavigator'; // Updated path
import { AuthProvider } from './app/providers/AuthProvider'; // Updated path

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
