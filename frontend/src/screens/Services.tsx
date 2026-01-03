import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import LoginBox from '../components/loginBox';
import ForgotBox from '../components/ForgotBox';
import FDICBadge from '../components/FDICBadge';
import UbuntuText from '../components/UbuntuText';
import TypeOfAccount from '../components/CheckingBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import Transactions from '../components/Transactions';
import { LinearGradient } from 'expo-linear-gradient';
import SpendingGraph from '../components/SpendingGraph';
import BottomNavBar from '../components/BottomNavbar';

export default function Services() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
  const morningGradient = { upper: '#A3CEF1', middle: '#69B3E7', lower: '#1E90FF' };
  const afternoonGradient = { upper: '#87CEFA', middle: '#0090c1ff', lower: '#0e82f7ff' };
  const eveningTimeGradient = { upper: '#32608fff', middle: '#072f57ff', lower: '#003366' }
  const nightTimeGradient = { upper: '#1a1a2e', middle: '#0f3057', lower: '#001f3f' };
  const defaultGradient = { upper: '#32608fff', middle: '#7693acff', lower: '#ffffff' };

  let currentTimeGradient = defaultGradient;

  return (
    <LinearGradient
      colors={[currentTimeGradient.upper, currentTimeGradient.middle, currentTimeGradient.lower]}
      style={styles.gradient}
    >
      <ScrollView>
        <Text style={styles.greetingsTitle}> This is Services  Page </Text>
      </ScrollView>
      <View style={styles.navBarDiv}>
        <BottomNavBar></BottomNavBar>
      </View>
    </LinearGradient>


  );
}



const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  greetingsTitle: {
    marginTop: 75,     // space from top / status bar
    marginLeft: 0,     // aligns to left
    color: 'white',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
    fontWeight: 'bold',
  },
  navBarDiv: {
    position: 'absolute',      // position relative to parent/screen
    bottom: 0,                 // stick to bottom
    left: 0,
    right: 0,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderTopColor: '#e6e6e6ff',
    elevation: 5,              // shadow on Android
    zIndex: 10,
  }             // ensure it appears on top
})
