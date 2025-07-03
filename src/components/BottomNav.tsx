import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TicketIcon from '../assets/ticket.svg';
import HomeIcon from '../assets/home.svg';
import SettingsIcon from '../assets/settings.svg';

export default function BottomNav({ styles, activeTab, setActiveTab }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('ticket')}>
        {activeTab === 'ticket' ? (
          <View style={styles.activeIconWrapper}>
            <TicketIcon width={24} height={24} />
          </View>
        ) : (
          <TicketIcon width={24} height={24} />
        )}
        <Text style={activeTab === 'ticket' ? styles.navTextActive : styles.navText}>Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('home')}>
        {activeTab === 'home' ? (
          <View style={styles.activeIconWrapper}>
            <HomeIcon width={24} height={24} />
          </View>
        ) : (
          <HomeIcon width={24} height={24} />
        )}
        <Text style={activeTab === 'home' ? styles.navTextActive : styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('settings')}>
        {activeTab === 'settings' ? (
          <View style={styles.activeIconWrapper}>
            <SettingsIcon width={24} height={24} />
          </View>
        ) : (
          <SettingsIcon width={24} height={24} />
        )}
        <Text style={activeTab === 'settings' ? styles.navTextActive : styles.navText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}