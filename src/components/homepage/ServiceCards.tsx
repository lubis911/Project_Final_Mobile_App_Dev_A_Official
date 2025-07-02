import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function ServiceCards({ styles, setShowOrderModal }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRow}>
      {/* Exterior Wash */}
      <View style={styles.cardWhite}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Exterior Wash</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceRp}>Rp</Text>
            <Text style={styles.priceValue}>20K</Text>
            <Text style={styles.pricePerHour}>/ Hour</Text>
          </View>
          <View style={styles.featuresList}>
            <Text style={styles.feature}>• Body wash</Text>
            <Text style={styles.feature}>• Glass cleaning</Text>
            <Text style={styles.feature}>• Wheel Washing</Text>
            <Text style={styles.feature}>• No Drink</Text>
            <Text style={styles.feature}>• Standard soap</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookingBtnDark}>
          <Text style={styles.bookingBtnTextLight}>Booking</Text>
        </TouchableOpacity>
        {/* Cheapest Badge */}
        <View style={styles.cheapestBadge}>
          <View style={styles.cheapestBg} />
          <Text style={styles.cheapestText}>Cheapest</Text>
        </View>
      </View>
      {/* Full Detailing */}
      <View style={styles.cardDark}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitleLight}>Full Detailing</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceRpLight}>Rp</Text>
            <Text style={styles.priceValueLight}>250K</Text>
            <Text style={styles.pricePerHourLight}>/ Hour</Text>
          </View>
          <View style={styles.featuresList}>
            <Text style={styles.featureLight}>• Exterior wash</Text>
            <Text style={styles.featureLight}>• Interior wash</Text>
            <Text style={styles.featureLight}>• Engine</Text>
            <Text style={styles.featureLight}>• Premium soap</Text>
            <Text style={styles.featureLight}>• Free Drink</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.bookingBtnYellow}
          onPress={() => setShowOrderModal(true)}
        >
          <Text style={styles.bookingBtnTextDark}>Booking</Text>
        </TouchableOpacity>
        {/* Recommended Badge */}
        <View style={styles.recommendedBadge}>
          <View style={styles.recommendedBg} />
          <Text style={styles.recommendedText}>Recommended</Text>
        </View>
      </View>
      {/* Interior Wash */}
      <View style={styles.cardWhite}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Interior Wash</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceRp}>Rp</Text>
            <Text style={styles.priceValue}>50K</Text>
            <Text style={styles.pricePerHour}>/ Hour</Text>
          </View>
          <View style={styles.featuresList}>
            <Text style={styles.feature}>• Seat washing</Text>
            <Text style={styles.feature}>• Item tidying</Text>
            <Text style={styles.feature}>• Vacuum cleaner</Text>
            <Text style={styles.feature}>• Free Drink</Text>
            <Text style={styles.feature}>• Glass wipe</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookingBtnDark}>
          <Text style={styles.bookingBtnTextLight}>Booking</Text>
        </TouchableOpacity>
      </View>
      {/* Engine Cleaning */}
      <View style={styles.cardDark}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitleLight}>Engine Cleaning</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceRpLight}>Rp</Text>
            <Text style={styles.priceValueLight}>150K</Text>
            <Text style={styles.pricePerHourLight}>/ Hour</Text>
          </View>
          <View style={styles.featuresList}>
            <Text style={styles.featureLight}>• Inner machine</Text>
            <Text style={styles.featureLight}>• Outside machine</Text>
            <Text style={styles.featureLight}>• Oil change</Text>
            <Text style={styles.featureLight}>• Replace engine coolant</Text>
            <Text style={styles.featureLight}>• Check engine</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookingBtnGrey}>
          <Text style={styles.bookingBtnTextDark}>Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}