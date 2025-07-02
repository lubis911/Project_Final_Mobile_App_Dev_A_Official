import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import ArrowBack from '../../assets/arrow_back.svg';
import GoogleLogo from '../../assets/google.png';
import NullPhoto from '../../assets/null-photo.png';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';

import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [based64, setbased64] = useState('');

  const auth = getAuth();
  const db = getDatabase();

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          fullName,
          email,
          photo: based64,
        });
        Alert.alert('Success', 'User registered!');
        navigation.navigate('SignIn');
      })
      .catch(error => {
        Alert.alert('Signup failed', error.message);
      });
  };

  const handleChoosePhoto = () => {
    Alert.alert('Pilih Foto', 'Ambil dari kamera atau pilih dari galeri?', [
      {
        text: 'Kamera',
        onPress: () => {
          launchCamera(
            {
              mediaType: 'photo',
              quality: 0.5,
              includeBase64: true,
            },
            response => {
              if (response.didCancel) {
                Alert.alert('Dibatalkan', 'Anda tidak mengambil foto.');
              } else if (response.errorMessage) {
                Alert.alert('Error', response.errorMessage);
              } else if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setPhotoUri(asset.uri || null);
                setbased64(asset.base64 || '');
              }
            },
          );
        },
      },
      {
        text: 'Galeri',
        onPress: () => {
          launchImageLibrary(
            {
              mediaType: 'photo',
              quality: 0.5,
              includeBase64: true,
            },
            response => {
              if (response.didCancel) {
                Alert.alert('Dibatalkan', 'Anda tidak memilih foto.');
              } else if (response.errorMessage) {
                Alert.alert('Error', response.errorMessage);
              } else if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setPhotoUri(asset.uri || null);
                setbased64(asset.base64 || '');
              }
            },
          );
        },
      },
      {
        text: 'Batal',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('SignIn')}
      >
        <ArrowBack width={20} height={20} />
        <Text style={styles.headerText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Gambar profil yang bisa dipilih */}
      <TouchableOpacity
        style={styles.photoContainer}
        onPress={handleChoosePhoto}
      >
        <Image
          source={photoUri ? { uri: photoUri } : NullPhoto}
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        placeholder="Enter full name"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        placeholder="Enter email"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Create password"
          placeholderTextColor="#888"
          secureTextEntry
          style={[styles.input, styles.flexWithMargin]}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.haveAccountText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or quick access with</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={GoogleLogo} style={styles.googleLogo} />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 48,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  flexWithMargin: {
    flex: 1,
    marginRight: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#F4B03E',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  haveAccountText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#777',
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SignUp;
