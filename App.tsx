import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/Navigation'; // gunakan navigator utama

import './src/config/Firebase';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}
