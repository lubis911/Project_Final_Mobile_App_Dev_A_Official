import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BCA from '../assets/logo_payment/bca.svg';

export default function WaitingPayment({ styles, showWaitingPayment,setShowPaymentSuccess }) {
  if (!showWaitingPayment) return null;
  return (
    <View style={styles.waitingContainer}>
      <Text style={styles.waitingTitle}>Waiting for payment</Text>
      <View style={styles.waitingIconBox}>
        <BCA width={38} height={26} />
      </View>
      <Text style={styles.waitingBankName}>Bank Central Asia</Text>
      <View style={styles.vaBox}>
        <Text style={styles.vaNumber}>0881 0581 0501 8508 5</Text>
        <TouchableOpacity>
          <Text style={styles.copyText}>Copy</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.expiredRow}>
        <Text style={styles.expiredLabel}>Invoice will be expired in: </Text>
        <Text style={styles.expiredTime}>23:59</Text>
      </View>
      <Text style={styles.waitingInfo}>
        Make a payment based on the virtual bca account listed, if you have made a payment please wait a few minutes until you are redirected to a new page automatically.
      </Text>
      <Text style={styles.waitingInfo2}>
        Ambil tangkapan layar halaman ini atau catat kode pembayaran Anda untuk ditunjukkan ke kasir. Anda dapat menemukan halaman ini kapan pun di aplikasi Carwash, dengan membukan menu tiket
      </Text>
      <View style={styles.caraBox}>
        <Text style={styles.caraTitle}>Cara Pembayaran E-commerce dengan Virtual Account Melalui Aplikasi myBCA</Text>
        <Text style={styles.caraStep}>
          {'\n'}Login ke myBCA
          {'\n'}Pilih Transfer dan pilih Virtual Account
          {'\n'}Pilih Transfer ke tujuan baru
          {'\n'}Masukkan nomor Virtual Account dari e-commerce dan klik Lanjut
          {'\n'}Pilih rekening sumber dana (jika memiliki lebih dari satu), masukkan nominal dan klik Lanjut
          {'\n'}Cek detail transaksi, klik Lanjut
          {'\n'}Masukkan PIN dan transaksi berhasil
        </Text>
         {/* Tombol sudah bayar */}
        <TouchableOpacity
          style={{
            backgroundColor: '#FFA31A',
            borderRadius: 20,
            height: 42,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 24,
          }}
          onPress={() => {
            setShowWaitingPayment(false);
            setShowPaymentSuccess(true);
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', fontFamily: 'Century Gothic' }}>
            Sudah Bayar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}