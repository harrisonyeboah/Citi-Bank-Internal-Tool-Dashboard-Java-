import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FDICBadge from './FDICBadge';
import UbuntuText from './UbuntuText';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LoginBoxProps } from './LoginBoxProps';
import { useNavigation } from '@react-navigation/native';

const LoginBox: React.FC<LoginBoxProps> = ({ boxChangeFunction }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    // Replace this with real authentication
    if (userName && password) {
        navigation.navigate('Home');
      Alert.alert('Login Info', `Username: ${userName}\nPassword: ${password}`);
    } else {
      Alert.alert('Error', 'Please enter username and password.');
    }
  }; 


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
      <UbuntuText style={styles.title}>Yeboah</UbuntuText>
      <TextInput
        style={styles.input}
        placeholder="Username"
        keyboardType="default"
        autoCapitalize="none"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={boxChangeFunction} style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>Forgot Username or Password</Text>
      </TouchableOpacity>
        <FDICBadge />
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    alignSelf: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  forgotButtonText: {
    color: '#003366',
    textAlign: 'center',
  },
});
