import React from 'react';
import { View, Text, Image } from 'react-native';

export default function DiscountCard({ styles }) {
  return (
    <View style={styles.discountCard}>
      <View style={styles.discountBg1} />
      <View style={styles.discountBg2} />
      <View style={styles.discountBg3} />
      <View style={styles.discountBg4} />
      <View style={styles.discountCircle1} />
      <View style={styles.discountCircle2} />
      <View style={styles.discountCircle3} />
      <Image style={styles.discountImg1} source={require('../assets/discount-illustration.gif')} />
      <Image style={styles.discountImg2} source={require('../assets/price-tag.gif')} />
      <Image style={styles.digitalAd} source={require('../assets/digitalads.png')} />
      <Text style={styles.discountText1}>
        <Text style={{ fontWeight: '400' }}>Buy </Text>
        <Text style={{ fontWeight: '700' }}>now</Text>
        <Text style={{ fontWeight: '400' }}> don't miss out</Text>
      </Text>
      <Text style={styles.discountText2}>
        <Text style={{ fontWeight: '700' }}>Discount</Text>
        <Text style={{ fontWeight: '400' }}> for day only</Text>
      </Text>
      <Text style={styles.discountPercent}>Discount 20%</Text>
    </View>
  );
}