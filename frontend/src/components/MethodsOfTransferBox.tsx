import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MethodsOfTransferBoxProps {
  boxChangeFunction: (method: string) => void;
}



const MethodsOfTransferBox = ({
  boxChangeFunction
}: MethodsOfTransferBoxProps) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>      

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("zelle")}
      >
        <Text style={styles.buttonText}>Zelle</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("internal")}
      >
        <Text style={styles.buttonText}>Internal Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("wire")}
      >
        <Text style={styles.buttonText}>Wire Transfer</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MethodsOfTransferBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginTop: 50, 
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#003366',
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
