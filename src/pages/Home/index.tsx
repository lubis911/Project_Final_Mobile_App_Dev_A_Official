import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';

const HomePage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* Top Section (Black Background) */}
      <View style={styles.topSection}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Car wash</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* ShineHub in Transparent Box */}
        <View style={styles.shineHubBlock}>
          <Text style={styles.shineText}>
            <Text style={styles.shineWhite}>Shine</Text>
            <Text style={styles.shineHubYellow}>Hub</Text>
          </Text>
        </View>

        {/* Headline */}
        <Text style={styles.carBike}>Car & Motorcycle Wash</Text>
        <Text style={styles.subtext}>
          Enjoy the sensation of a spotless, shiny car— top-quality care for
          your vehicle every time.
        </Text>

        {/* Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.learnMore}>
            <Text style={styles.learnText}>Learn More</Text>
            <Text style={styles.arrow}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bookingNow}
          onPress={() => navigation.navigate('Homepage')}
        >
          <Text style={styles.bookingText}>BOOKING NOW</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section (White Background) */}
      <View style={styles.bottomSection}>
        <View style={styles.vehicleImages}>
          <Image
            source={require('../../assets/motor.png')}
            style={styles.motorImage}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/car.png')}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.taglines}>
          <Text style={styles.taglineText}>
            More Than a Wash, It’s Full Care!
          </Text>
          <Text style={styles.taglineText}>
            Quick Service, Gleaming Vehicles!
          </Text>
          <Text style={styles.taglineText}>Maximum Clean, Total Shine!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    backgroundColor: '#000000',
    padding: 20,
    paddingBottom: 30,
  },
  bottomSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Cursive',
  },
  loginButton: {
    backgroundColor: '#F4B03E',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  shineHubBlock: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 10,
  },
  shineText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shineWhite: {
    color: 'white',
  },
  shineHubYellow: {
    backgroundColor: '#F4B03E',
    color: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    paddingHorizontal: 4,
  },
  carBike: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtext: {
    color: '#ccc',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  learnMore: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  learnText: {
    color: 'white',
    marginRight: 5,
  },
  arrow: {
    color: 'white',
  },
  bookingNow: {
    backgroundColor: '#F4B03E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bookingText: {
    color: 'white',
    fontWeight: 'bold',
  },
  vehicleImages: {
    alignItems: 'center',
    marginTop: 10,
  },
  motorImage: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  carImage: {
    width: 300,
    height: 180,
  },
  taglines: {
    marginTop: 20,
    alignItems: 'center',
  },
  taglineText: {
    color: '#333',
    fontStyle: 'italic',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
});

export default HomePage;