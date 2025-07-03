import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEYGVLOUQK0aKIk9tcjFj8J4mkIckmTh8',
  authDomain: 'projectfinalmobileappdeva.firebaseapp.com',
  projectId: 'projectfinalmobileappdeva',
  storageBucket: 'projectfinalmobileappdeva.appspot.com',
  messagingSenderId: '1086334153938',
  appId: '1:1086334153938:web:e00d726b23efc715b8690b',
  databaseURL: 'https://projectfinalmobileappdeva-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;