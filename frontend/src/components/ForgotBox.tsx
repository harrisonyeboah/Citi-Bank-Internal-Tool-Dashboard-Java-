import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FDICBadge from './FDICBadge';
import UbuntuText from './UbuntuText';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginBox from './loginBox';
import { LoginBoxProps } from './LoginBoxProps';

const ForgotBox: React.FC<LoginBoxProps> = ({ boxChangeFunction }) => {
    const [currentSection, setCurrentSection] = useState("username")
    const [userName, setUserName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ssnAndItin, setSsnAndItin] = useState("");
  const handleForgotRequest = () => {
    if (currentSection == "username") {
      Alert.alert('Request Info', `You have requested to recover your ${currentSection}.`);
    } else if (currentSection == "accountnumber") {
      Alert.alert('Request Info', `You have requested to recover your ${currentSection}.`);
    } else {
        Alert.alert('This is the social security section');
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
        <View style={styles.buttonOverview}>
        <TouchableOpacity onPress={() => setCurrentSection('username')}>
            <Text style={styles.overViewText}>Username</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentSection('account number')}>
            <Text style={styles.overViewText}>Account Number</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentSection('ssnItin')}>
            <Text style={styles.overViewText}>SSN / ITIN</Text>
        </TouchableOpacity>
        </View>

         <View>
        {(currentSection == "username" ?       
            <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                value={userName}
                maxLength={24}
                onChangeText={(text) => setUserName(text.replace(/\s/g, ''))}
            /> : 
        (currentSection == "account number" ? 
            <TextInput
                style={styles.input}
                placeholder="Account Number"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                value={accountNumber}
                maxLength={12}
                onChangeText={(text) => {
                const numeric = text.replace(/[^0-9]/g, '');
                setAccountNumber(numeric);
                }}
            /> : 
                    
            <TextInput
                style={styles.input}
                placeholder="SSN / ITIN"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                value={ssnAndItin}
                maxLength={12}
                onChangeText={(text) => {
                const numeric = text.replace(/[^0-9]/g, '');
                setSsnAndItin(numeric);
                }}
            />))}
        </View>
        <TouchableOpacity><Text style={styles.goBackButton} onPress={boxChangeFunction}> Go Back to Login </Text> </TouchableOpacity>
        <FDICBadge />
    </View>
  );
};

export default ForgotBox;

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
  overViewText: {
    color: "#003366",
    fontSize: 11.5
  },
  
    buttonOverview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 12
    },

    goBackButton: {
        textAlign:"center",
        color: "#003366"
    }

});
