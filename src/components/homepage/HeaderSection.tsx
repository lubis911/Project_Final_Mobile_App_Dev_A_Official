import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HeaderSection({ styles }) {
  return (
    <>
      <View style={styles.headerBg} />
      <Image style={styles.headerImg} source={{ uri: 'https://placehold.co/393x59' }} />
      <Image style={styles.avatar} source={require('../assets/user-avatar.png')} />
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.hi}>Hi, Eden</Text>
    </>
  );
}