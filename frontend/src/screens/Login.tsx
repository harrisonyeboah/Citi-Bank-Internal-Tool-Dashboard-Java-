import React, { useState } from 'react';
import {Text, View, StyleSheet, Alert } from 'react-native';
import LoginBox from '../components/loginBox';
import ForgotBox from '../components/ForgotBox';
import FDICBadge from '../components/FDICBadge';
import UbuntuText from '../components/UbuntuText';


import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const ClickOnForgot = () => {
        Alert.alert('Forgot Info', 'Navigating to Forgot Password Screen');
    }
    const handleBoxChange = () => {
        setIsLogin(!isLogin);
    }
  return (
    <LinearGradient
      colors={['#32608fff', '#072f57ff', '#003366']}
      style={styles.gradient}
    >
    {isLogin === true ? <LoginBox boxChangeFunction={handleBoxChange} /> : <ForgotBox boxChangeFunction={handleBoxChange}/>}
    </LinearGradient>

  );
}



const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center', // vertically center
    alignItems: 'center',     // horizontally center
    padding: 20,
  }
});
