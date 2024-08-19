import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useAuth } from '../providers/AuthProvider';

export default function AuthScreen() {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/FixtrackrLogo.png')} style={styles.logo} />
      <Text style={styles.heading}>Welcome to FixTrackr</Text>
      <TouchableOpacity onPress={login} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Sign Up')} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  heading: {
    fontSize: 32,
    color: '#0466C8',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loginButton: {
    width: '75%',
    paddingVertical: 16,
    borderRadius: 9999,
    alignItems: 'center',
    backgroundColor: '#0466C8',
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  signUpButton: {
    width: '75%',
    paddingVertical: 16,
    borderRadius: 9999,
    alignItems: 'center',
    borderColor: '#0466C8',
    borderWidth: 1,
  },
  signUpButtonText: {
    color: '#0466C8',
    fontWeight: '600',
  },
});
