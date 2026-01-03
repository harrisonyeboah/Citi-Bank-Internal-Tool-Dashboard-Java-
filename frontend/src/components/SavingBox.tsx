import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FDICBadge from './FDICBadge';
import UbuntuText from './UbuntuText';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LoginBoxProps } from './LoginBoxProps';
const SavingBox: React.FC = () => {





  const loadFonts = async () => {
    await Font.loadAsync({
      "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
      "Ubuntu-Light": require("../../assets/fonts/Ubuntu-Light.ttf"),
      "BBHBartle-Regular": require("../../assets/fonts/BBHBartle-Regular.ttf"),
    });
  };


    if (!loadFonts) {
    return <AppLoading startAsync={loadFonts} onFinish={() => {}} onError={console.warn} />;
  }
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.innerContainerText}> Savings </Text>
            <Text style={styles.innerContainerText}> $2,003.49</Text>
        </View>
    </View>
  );
};

export default SavingBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  }, 
  innerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}, 
innerContainerText:{
    color: "#003366",
    fontWeight: 'bold',
    fontSize: 15
}



});
