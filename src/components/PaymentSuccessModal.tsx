import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PaymentSuccessModalProps {
  visible: boolean;
  onClose: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Payment succesfully</Text>
          <Text style={styles.desc}>
            Thank you for keeping us as your trusted partner, please show this ticket to the officer and we will be ready to serve you.{"\n\n"}
            Do not give this ticket to anyone to avoid fraud and policy violations.
          </Text>
          {/* Ticket Card */}
          <View style={styles.ticketCard}>
            {/* Top Row */}
            <View style={styles.ticketRow}>
              <Text style={styles.ticketLabel}>Ms. Yanti</Text>
              <Text style={styles.ticketLabel}>Medium car</Text>
            </View>
            {/* Service */}
            <View style={styles.ticketServiceRow}>
              <Text style={styles.ticketService}>Full Detailing</Text>
              <View style={styles.paidBadge}>
                <Text style={styles.paidText}>Paid</Text>
              </View>
            </View>
            {/* Date & ID */}
            <View style={styles.ticketRow}>
              <Text style={styles.ticketLabel}>mon, 30 Oct 2024</Text>
              <Text style={styles.ticketLabel}>180581085108</Text>
            </View>
            {/* Start, Seat, Discount */}
            <View style={styles.ticketInfoRow}>
              <View style={styles.ticketInfoCol}>
                <Text style={styles.ticketInfoTitle}>Start on</Text>
                <Text style={styles.ticketInfoValue}>07:00 PM</Text>
              </View>
              <View style={styles.ticketInfoCol}>
                <Text style={styles.ticketInfoTitle}>Seat number</Text>
                <Text style={styles.ticketInfoValue}>11</Text>
              </View>
              <View style={styles.ticketInfoCol}>
                <Text style={styles.ticketInfoTitle}>Discount</Text>
                <Text style={styles.ticketInfoValue}>none</Text>
              </View>
            </View>
            {/* Total */}
            <View style={styles.ticketTotalRow}>
              <Text style={styles.ticketTotalLabel}>Total</Text>
              <Text style={styles.ticketTotalValue}>: Rp. 250.000</Text>
            </View>
          </View>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    width: 370, backgroundColor: '#fff', borderRadius: 20, padding: 18, alignItems: 'center',
  },
  title: {
    fontSize: 28, fontWeight: '700', color: 'black', fontFamily: 'Century Gothic', marginBottom: 8, textAlign: 'center',
  },
  desc: {
    color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', marginBottom: 16, textAlign: 'center',
  },
  ticketCard: {
    width: 336, backgroundColor: '#FBFBFB', borderRadius: 20, borderWidth: 1, borderColor: '#575757',
    padding: 16, marginBottom: 24,
  },
  ticketRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4,
  },
  ticketLabel: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', fontWeight: '400',
  },
  ticketServiceRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8,
  },
  ticketService: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', fontWeight: '400',
    backgroundColor: '#FBFBFB', borderRadius: 20, borderWidth: 1, borderColor: '#575757', paddingHorizontal: 18, paddingVertical: 6,
  },
  paidBadge: {
    backgroundColor: '#6BA58C', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 2, marginLeft: 8,
    transform: [{ rotate: '10deg' }],
  },
  paidText: {
    color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',
  },
  ticketInfoRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8,
  },
  ticketInfoCol: {
    alignItems: 'center', flex: 1,
  },
  ticketInfoTitle: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', fontWeight: '400',
  },
  ticketInfoValue: {
    fontSize: 10, color: 'black', fontFamily: 'Inter', fontWeight: '400',
  },
  ticketTotalRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, borderTopWidth: 1, borderTopColor: '#757575', paddingTop: 8,
  },
  ticketTotalLabel: {
    fontSize: 15, color: '#575757', fontFamily: 'Inter', fontWeight: '700',
  },
  ticketTotalValue: {
    fontSize: 15, color: '#575757', fontFamily: 'Inter', fontWeight: '700',
  },
  closeBtn: {
    width: 102, height: 42, backgroundColor: '#FFA31A', borderRadius: 20, alignItems: 'center', justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  closeBtnText: {
    color: 'white', fontSize: 18, fontWeight: '700', fontFamily: 'Century Gothic',
  },
});

export default PaymentSuccessModal;