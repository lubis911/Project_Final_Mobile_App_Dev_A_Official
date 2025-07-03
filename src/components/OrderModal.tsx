import React from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import IconCar from '../assets/icon_car.svg';
import IconMotor from '../assets/icon_motorcycle.svg';
import IconTruck from '../assets/icon_truck.svg';
import IconDate from '../assets/icon_data-date.svg';
import IconJam from '../assets/icon_clock.svg';

export default function OrderModal({
  styles,
  showOrderModal,
  setShowOrderModal,
  selectedVehicle,
  setSelectedVehicle,
  setShowPaymentModal,
}) {
  return (
    <Modal
      visible={showOrderModal}
      animationType="slide"
      transparent
      onRequestClose={() => setShowOrderModal(false)}
    >
      <View style={styles.overlayBg}>
        <View style={styles.orderModal}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 28, fontWeight: '700', color: 'black', fontFamily: 'Century Gothic' }}>New order</Text>
            <Pressable onPress={() => setShowOrderModal(false)}>
              <Text style={{ fontSize: 24, color: '#1E1E1E' }}>×</Text>
            </Pressable>
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginBottom: 8 }}>Choose the vehicle to be washed</Text>
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            {[IconCar, IconMotor, IconTruck].map((IconComponent, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedVehicle(idx)}
                style={[
                  styles.vehicleBox,
                  idx === 0 && { marginRight: 8 },
                  idx === 1 && { marginHorizontal: 8 },
                  idx === 2 && { marginLeft: 8 },
                  {
                    backgroundColor: selectedVehicle === idx ? '#F8E8C8' : 'white',
                    borderColor: '#B3B3B3',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}
              >
                <IconComponent width={40} height={40} />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Set the washing date</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <IconDate width={32} height={32} style={{ marginRight: 8 }} />
            <Text style={{ fontSize: 14, color: 'black' }}>Monday, 30 Nov 2024</Text>
            <TouchableOpacity style={styles.setBtn}><Text style={{ fontSize: 11 }}>Set</Text></TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Set the time</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <IconJam width={32} height={32} style={{ marginRight: 8 }} />
            <Text style={{ fontSize: 14, color: 'black' }}>03:00 PM</Text>
            <TouchableOpacity style={styles.setBtn}><Text style={{ fontSize: 11 }}>Set</Text></TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Number of vehicles</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <TouchableOpacity style={styles.counterBtn}><Text style={{ fontSize: 18 }}>-</Text></TouchableOpacity>
            <Text style={{ fontSize: 15, marginHorizontal: 16 }}>1</Text>
            <TouchableOpacity style={styles.counterBtn}><Text style={{ fontSize: 18 }}>+</Text></TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#575757', marginVertical: 12 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 25, color: '#575757', fontWeight: '700', fontFamily: 'Century Gothic' }}>Total :</Text>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: '700', fontFamily: 'Century Gothic', marginLeft: 8 }}>Rp. 250.000</Text>
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginBottom: 16, textAlign: 'center' }}>
            Once you order, then our service will never disappoint, believe and trust us.
          </Text>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              setShowOrderModal(false);
              setShowPaymentModal(true);
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}