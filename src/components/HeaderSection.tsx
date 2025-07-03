import React from 'react';
import {
  View,
  Text,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

type HeaderSectionProps = {
  styles: {
    headerBg: ViewStyle;
    headerImg: ImageStyle;
    avatar: ImageStyle;
    welcome: TextStyle;
    hi: TextStyle;
  };
  fullName?: string;
  photoUrl?: string;
};

export default function HeaderSection({
  styles,
  fullName,
  photoUrl,
}: HeaderSectionProps) {
  return (
    <>
      <View style={styles.headerBg} />
      <Image
        style={styles.headerImg}
        source={{ uri: 'https://placehold.co/393x59' }}
      />
      <Image
        style={styles.avatar}
        source={
          photoUrl
            ? {
                uri: photoUrl.startsWith('/9j/')
                  ? `data:image/jpeg;base64,${photoUrl}`
                  : photoUrl,
              }
            : require('../assets/null-photo.png')
        }
      />

      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.hi}>Hi, {fullName || 'Guest'}</Text>
    </>
  );
}
