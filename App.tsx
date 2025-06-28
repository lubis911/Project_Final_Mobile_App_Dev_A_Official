import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/Navigation'; // gunakan navigator utama

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}
