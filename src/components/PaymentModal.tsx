import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import BRI from '../assets/logo_payment/BRI.svg';
import BCA from '../assets/logo_payment/bca.svg';
import Mandiri from '../assets/logo_payment/mandiri.svg';
import Paypal from '../assets/logo_payment/paypal.svg';
import OVO from '../assets/logo_payment/ovo.svg';
import DANA from '../assets/logo_payment/dana.svg';

export default function PaymentModal({
  styles,
  showPaymentModal,
  setShowPaymentModal,
  setShowWaitingPayment,
  setShowPaymentSuccess,
}) {
  return (
    <Modal
      visible={showPaymentModal}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setShowPaymentModal(false)}
    >
      <View style={styles.paymentFullScreen}>
        <Text style={styles.paymentHeader}>Choose Payment Method</Text>
        <Text style={styles.paymentDesc}>
          Payment method appear, only receive payment{'\n'}from indonesia
        </Text>
        <ScrollView contentContainerStyle={styles.paymentOptions}>
          {[
            {
              label: 'Virtual BCA',
              Icon: BCA,
              onPress: () => {
                setShowPaymentModal(false);
                setShowWaitingPayment(true);
              },
            },
            { label: 'Virtual BRI', Icon: BRI },
            { label: 'Virtual Mandiri', Icon: Mandiri },
            { label: 'Paypal', Icon: Paypal },
          ].map(({ label, Icon, onPress }) => (
            <TouchableOpacity
              key={label}
              style={styles.paymentOptionBox}
              onPress={onPress}
              activeOpacity={onPress ? 0.7 : 1}
            >
              <Icon width={36} height={36} style={{ marginRight: 16 }} />
              <Text style={styles.paymentOptionText}>{label}</Text>
            </TouchableOpacity>
          ))}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
            <Text style={styles.ewalletDividerText}>E-Wallet Payment</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
          </View>
          {[
            { label: 'OVO', Icon: OVO },
            { label: 'DANA', Icon: DANA },
          ].map(({ label, Icon }) => (
            <View key={label} style={styles.paymentOptionBox}>
              <Icon width={36} height={36} style={{ marginRight: 16 }} />
              <Text style={styles.paymentOptionText}>{label}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.paymentBackBtn}
          onPress={() => setShowPaymentModal(false)}
        >
          <Text style={styles.paymentBackText}>Back</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}