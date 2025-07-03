import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEYGVLOUQK0aKIk9tcjFj8J4mkIckmTh8',
  authDomain: 'projectfinalmobileappdeva.firebaseapp.com',
  projectId: 'projectfinalmobileappdeva',
  storageBucket: 'projectfinalmobileappdeva.firebasestorage.app',
  messagingSenderId: '1086334153938',
  appId: '1:1086334153938:web:e00d726b23efc715b8690b',
  databaseURL: 'https://projectfinalmobileappdeva-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
