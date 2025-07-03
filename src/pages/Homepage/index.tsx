import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import HeaderSection from '../../components/HeaderSection';
import DiscountCard from '../../components/DiscountCard';
import ServiceCards from '../../components/ServiceCards';
import WaitingPayment from '../../components/WaitingPayment';
import OrderModal from '../../components/OrderModal';
import PaymentModal from '../../components/PaymentModal';
import BottomNav from '../../components/BottomNav';
import PaymentSuccessModal from '../../components/PaymentSuccessModal';

import LocationImg from '../../assets/Location.png';

export default function CarWashScreen() {
  const [activeTab, setActiveTab] = useState<'ticket' | 'home' | 'settings'>('home');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [showWaitingPayment, setShowWaitingPayment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderSection styles={styles} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <DiscountCard styles={styles} />
        <ServiceCards styles={styles} setShowOrderModal={setShowOrderModal} />
        {/* Tambahkan gambar Location di bawah ServiceCards */}
        <Image
          source={LocationImg}
          style={{ width: 450, height: 300, alignSelf: 'center', marginTop: 24, borderRadius: 12 }}
          resizeMode="cover"
        />
        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>Carwash</Text>
          <View style={styles.footerIconsRow}>
            <View style={styles.footerIcon1} />
            <View style={styles.footerIcon2} />
            <View style={styles.footerIcon3} />
            <View style={styles.footerIcon4Stack}>
              <View style={styles.footerIcon4Black} />
              <View style={styles.footerIcon4White} />
            </View>
          </View>
          <Text style={styles.footerCopyright}>
            © 2024 Car wash. | Ezer car wash Agency
          </Text>
          <Text style={styles.footerPrivacy}>
            All rights reserved. Privacy Policy.
          </Text>
        </View>
      </ScrollView>
      <WaitingPayment styles={styles} showWaitingPayment={showWaitingPayment} />
      <PaymentSuccessModal
        visible={showPaymentSuccess}
        onClose={() => setShowPaymentSuccess(false)}
      />
      <OrderModal
        styles={styles}
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        setShowPaymentModal={setShowPaymentModal}
      />
      <PaymentModal
        styles={styles}
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
        setShowWaitingPayment={setShowWaitingPayment}
        

      />
      <BottomNav styles={styles} activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Layout utama
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingTop: 90, paddingBottom: 80 },

  // Header
  headerBg: {
    position: 'absolute', top: 0, left: 0, width: 393, height: 80,
    backgroundColor: 'black', zIndex: 1,
  },
  headerImg: {
    position: 'absolute', top: 0, left: 0, width: 393, height: 59, zIndex: 2,
  },
  avatar: {
    position: 'absolute', top: 24, left: 344, width: 30, height: 30,
    borderRadius: 15, zIndex: 3,
  },
  welcome: {
    position: 'absolute', top: 42, left: 51, color: 'white',
    fontSize: 13, fontWeight: '700', zIndex: 3,
  },
  hi: {
    position: 'absolute', top: 23, left: 51, color: 'white',
    fontSize: 10, fontWeight: '400', zIndex: 3,
  },

  // Discount Card
  discountCard: {
    marginHorizontal: 16, marginBottom: 24, height: 136, borderRadius: 10,
    backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.1,
    shadowRadius: 10, elevation: 4,
  },
  discountBg1: {
    position: 'absolute', left: 11, top: 18, width: 197, height: 90,
    backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10,
  },
  discountBg2: {
    position: 'absolute', left: 273, top: 40, width: 81, height: 49,
    backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 20,
  },
  discountBg3: {
    position: 'absolute', left: 90, top: 53, width: 197, height: 82,
    backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10,
  },
  discountBg4: {
    position: 'absolute', left: 20, top: 40, width: 123, height: 120, overflow: 'hidden',
  },
  discountCircle1: {
    position: 'absolute', left: 273, top: 16, width: 44, height: 42,
    backgroundColor: '#D9D9D9', borderRadius: 22, borderWidth: 1, borderColor: 'black',
  },
  discountCircle2: {
    position: 'absolute', left: 306, top: 80, width: 38, height: 36,
    backgroundColor: '#D9D9D9', borderRadius: 19, borderWidth: 1, borderColor: 'black',
  },
  discountCircle3: {
    position: 'absolute', left: 270, top: 103, width: 38, height: 36,
    backgroundColor: '#D9D9D9', borderRadius: 19, borderWidth: 1, borderColor: 'black',
  },
  discountImg1: { position: 'absolute', left: 272, top: 33, width: 68, height: 63 },
  discountImg2: { position: 'absolute', left: 279, top: 110, width: 62, height: 81 },
  digitalAd: { position: 'absolute', left: 20, width: 120, height: 136 },
  discountText1: {
    position: 'absolute', left: 137, top: 70, width: 114, height: 15,
    fontSize: 10, color: 'black', textAlign: 'center',
  },
  discountText2: {
    position: 'absolute', left: 136, top: 90, width: 113, height: 14,
    fontSize: 10, color: 'black', textAlign: 'center',
  },
  discountPercent: {
    position: 'absolute', left: 132, top: 23, width: 140, height: 25,
    fontSize: 20, color: '#FFA31A', fontWeight: '600', textAlign: 'center',
  },

  // Service Cards
  cardsRow: { flexDirection: 'row', marginTop: 24 },
  cardDark: {
    width: 314, minHeight: 396, backgroundColor: '#2C2C2C', borderRadius: 10,
    marginRight: 16, padding: 24, justifyContent: 'space-between',
    shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 4, elevation: 4,
  },
  cardWhite: {
    width: 314, minHeight: 396, backgroundColor: '#fff', borderRadius: 10,
    marginRight: 16, padding: 24, justifyContent: 'space-between',
    borderWidth: 1, borderColor: '#D9D9D9',
  },
  cardContent: { flex: 1, alignItems: 'center', marginBottom: 16 },
  cardTitle: {
    color: '#1E1E1E', fontSize: 24, fontWeight: '600',
    textAlign: 'center', marginBottom: 8,
  },
  cardTitleLight: {
    color: '#F5F5F5', fontSize: 24, fontWeight: '600',
    textAlign: 'center', marginBottom: 8,
  },
  priceRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 8 },
  priceRp: { color: '#1E1E1E', fontSize: 24, fontWeight: '700', marginTop: 15 },
  priceValue: { color: '#1E1E1E', fontSize: 48, fontWeight: '700', marginLeft: 2, marginTop: 10 },
  pricePerHour: { color: '#1E1E1E', fontSize: 14, fontWeight: '400', marginLeft: 6 },
  priceRpLight: { color: '#F5F5F5', fontSize: 24, fontWeight: '700', marginTop: 15 },
  priceValueLight: { color: '#F5F5F5', fontSize: 48, fontWeight: '700', marginLeft: 2 },
  pricePerHourLight: { color: '#F5F5F5', fontSize: 14, fontWeight: '400', marginLeft: 8 },
  featuresList: { marginTop: 8, alignItems: 'flex-start' },
  feature: {
    color: '#757575', fontSize: 16, fontWeight: '400',
    marginBottom: 8, lineHeight: 24, textAlign: 'left',
  },
  featureLight: {
    color: '#F5F5F5', fontSize: 16, fontWeight: '400',
    marginBottom: 8, lineHeight: 24, textAlign: 'left',
  },
  bookingBtnDark: {
    backgroundColor: '#2C2C2C', borderRadius: 8, padding: 12,
    alignItems: 'center', marginTop: 16,
  },
  bookingBtnYellow: {
    backgroundColor: '#F4B538', borderRadius: 8, padding: 12,
    alignItems: 'center', marginTop: 16,
  },
  bookingBtnGrey: {
    backgroundColor: '#E3E3E3', borderRadius: 8, padding: 12,
    alignItems: 'center', marginTop: 16,
  },
  bookingBtnTextLight: { color: '#F5F5F5', fontSize: 16, fontWeight: '700' },
  bookingBtnTextDark: { color: '#1E1E1E', fontSize: 16, fontWeight: '700' },

  // Badge
  cheapestBadge: {
    position: 'absolute', left: 179, top: -17, width: 157, height: 128,
    alignItems: 'flex-end', justifyContent: 'flex-start',
  },
  cheapestBg: {
    width: 150, height: 80, backgroundColor: '#FF5959', borderRadius: 0,
    position: 'absolute', left: 21, top: 0, shadowColor: '#000',
    shadowOpacity: 0.1, shadowRadius: 6, transform: [{ rotate: '45deg' }],
  },
  cheapestText: {
    position: 'absolute', left: 79, top: 40, color: 'white',
    fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }],
  },
  recommendedBadge: {
    position: 'absolute', left: 867, top: -18, width: 157, height: 128,
    alignItems: 'flex-end', justifyContent: 'flex-start',
  },
  recommendedBg: {
    width: 136, height: 126, backgroundColor: '#757575', borderRadius: 10,
    position: 'absolute', left: 21, top: 0, shadowColor: '#000',
    shadowOpacity: 0.1, shadowRadius: 6, elevation: 3,
  },
  recommendedText: {
    position: 'absolute', left: 107, top: 2, color: 'white',
    fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }],
  },

  // Modal Order
  overlayBg: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center', alignItems: 'center',
  },
  orderModal: {
    width: 350, backgroundColor: 'white', borderRadius: 20, padding: 24,
    borderWidth: 1, borderColor: '#575757', elevation: 10,
  },
  vehicleBox: {
    width: 94, height: 84, borderRadius: 10, borderWidth: 1,
  },
  setBtn: {
    backgroundColor: '#D9D9D9', borderRadius: 10, paddingHorizontal: 12,
    paddingVertical: 2, marginLeft: 8,
  },
  counterBtn: {
    width: 32, height: 32, borderRadius: 8, backgroundColor: '#F5F5F5',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#757575',
  },
  continueBtn: {
    backgroundColor: '#FFA31A', borderRadius: 20, height: 42,
    alignItems: 'center', justifyContent: 'center', marginTop: 8,
  },

  // Modal Payment
  paymentFullScreen: {
    flex: 1, backgroundColor: 'white', paddingTop: 48, paddingHorizontal: 18,
  },
  paymentHeader: {
    fontSize: 28, fontWeight: '700', color: 'black',
    fontFamily: 'Century Gothic', marginBottom: 12, textAlign: 'center',
  },
  paymentDesc: {
    color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400',
    marginBottom: 24, textAlign: 'center',
  },
  paymentOptions: { paddingBottom: 100 },
  paymentOptionBox: {
    width: '100%', height: 51, backgroundColor: 'white', borderRadius: 15,
    borderWidth: 1, borderColor: 'rgba(110,109,109,0.58)', flexDirection: 'row',
    alignItems: 'center', marginBottom: 18, paddingLeft: 24,
  },
  paymentOptionText: {
    color: '#575757', fontSize: 15, fontFamily: 'Inter', fontWeight: '400',
  },
  ewalletDividerText: {
    marginHorizontal: 12, color: '#575757', fontSize: 15, fontFamily: 'Inter',
    fontWeight: '700', textAlign: 'center', backgroundColor: 'white', paddingHorizontal: 8,
  },
  paymentBackBtn: {
    position: 'absolute', bottom: 32, right: 24, width: 102, height: 42,
    backgroundColor: '#FFA31A', borderRadius: 20, alignItems: 'center', justifyContent: 'center',
  },
  paymentBackText: {
    color: 'white', fontSize: 18, fontWeight: '700', fontFamily: 'Century Gothic',
  },

  // Waiting Payment
  waitingContainer: {
    flex: 1, backgroundColor: 'white', padding: 20, paddingTop: 60,
    position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, zIndex: 99,
  },
  waitingTitle: {
    fontSize: 28, fontWeight: '700', fontFamily: 'Century Gothic',
    textAlign: 'center', marginBottom: 24,
  },
  waitingIconBox: { alignSelf: 'center', marginBottom: 12 },
  waitingBankName: {
    textAlign: 'center', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', marginBottom: 8,
  },
  vaBox: {
    backgroundColor: '#fff', borderRadius: 20, elevation: 2, shadowColor: '#000',
    shadowOpacity: 0.1, shadowRadius: 4, marginVertical: 8, padding: 16,
    alignItems: 'center', flexDirection: 'row', justifyContent: 'center',
  },
  vaNumber: {
    fontSize: 12, fontFamily: 'Inter', fontWeight: '400', color: 'black', marginRight: 16,
  },
  copyText: {
    color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400',
    backgroundColor: '#D9D9D9', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 2,
  },
  expiredRow: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8,
  },
  expiredLabel: { fontSize: 15, fontFamily: 'Inter', color: 'black' },
  expiredTime: {
    fontSize: 15, fontFamily: 'Inter', color: '#F4B538', fontWeight: '700', marginLeft: 8,
  },
  waitingInfo: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', textAlign: 'center', marginVertical: 8,
  },
  waitingInfo2: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', textAlign: 'center', marginBottom: 8,
  },
  caraBox: {
    backgroundColor: 'white', borderRadius: 20, marginTop: 16, padding: 12, elevation: 1,
  },
  caraTitle: {
    fontSize: 10, fontWeight: '700', color: 'black', fontFamily: 'Inter', marginBottom: 4,
  },
  caraStep: { fontSize: 10, color: 'black', fontFamily: 'Inter' },

  // Bottom Navigation
  bottomNav: {
    position: 'absolute', left: 0, right: 0, bottom: 0, height: 80,
    flexDirection: 'row', backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around',
  },
  navItem: {
    flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
  },
  activeIconWrapper: {
    backgroundColor: '#F4B538', borderRadius: 20, padding: 12,
    marginBottom: 2, marginTop: 2, alignItems: 'center', justifyContent: 'center',
  },
  navText: {
    color: 'white', fontSize: 12, fontWeight: '500', letterSpacing: 0.5, marginTop: 4,
  },
  navTextActive: {
    color: 'black', fontSize: 12, fontWeight: '500', letterSpacing: 0.5, marginTop: 4,
  },
  menuIcon: { padding: 5 },
  menuIconText: { fontSize: 22, color: 'white' },

  // Footer
  footerContainer: {
    width: 410,
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingTop: 12,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  footerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Caveat Brush',
    fontWeight: '400',
    marginLeft: 10,
    marginBottom: 4,
  },
  footerIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 8,
    height: 16,
  },
  footerIcon1: {
    width: 13, height: 13, backgroundColor: 'white', borderRadius: 2, marginRight: 4,
  },
  footerIcon2: {
    width: 12, height: 8, backgroundColor: 'white', borderRadius: 2, marginRight: 4,
  },
  footerIcon3: {
    width: 13, height: 13, backgroundColor: 'white', borderRadius: 2, marginRight: 8,
  },
  footerIcon4Stack: {
    width: 8, height: 8, position: 'relative', marginRight: 4,
  },
  footerIcon4Black: {
    width: 8, height: 8, backgroundColor: 'black', borderRadius: 2, position: 'absolute', top: 0, left: 0,
  },
  footerIcon4White: {
    width: 8, height: 7, backgroundColor: 'white', borderRadius: 2, position: 'absolute', top: 0.5, left: 0,
  },
  footerCopyright: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginLeft: 8,
    marginBottom: 2,
  },
  footerPrivacy: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginLeft: 17,
  },
});