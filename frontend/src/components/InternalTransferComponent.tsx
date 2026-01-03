import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface BaseAccountProps {
  lastFourDigits: string;
}

interface SavingsComponentProps extends BaseAccountProps {
  savingsBalance: number;
}

interface CheckingsComponentProps extends BaseAccountProps {
  checkingsBalance: number;
}

const SavingsComponent = ({ savingsBalance, lastFourDigits}: SavingsComponentProps) => {
  return (
    <View>
      <Text style={styles.componentHeaderText}> Savings </Text>
      <Text style={styles.componentBalanceText}> ${savingsBalance} </Text>
    </View>
  )
};

const CheckingsComponent = ({checkingsBalance, lastFourDigits,}: CheckingsComponentProps) => {
  return (
    <View>
      <Text style={styles.componentHeaderText}> Checkings </Text>
      <Text style={styles.componentBalanceText}> ${checkingsBalance} </Text>
    </View>
  )
};




const InternalTransferComponent: React.FC = () => {
  const [isSavings, setIsSavings] = useState(true);

  const [amount, setAmount] = useState('');

  const handlePress = (digit: string) => {
    setAmount(prev => prev + digit);
  };

  const handleDelete = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setAmount('');
  };

  const numPad = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['C','0','⌫'], // C = clear, ⌫ = backspace
  ];

  return (
    <View style={styles.container}>
        <View style={styles.swapContainer}>
          {isSavings ? (
            <>
              <SavingsComponent savingsBalance={200.12} lastFourDigits="1234" />
              <TouchableOpacity onPress={() => setIsSavings(false)}>
                <Text style={styles.confirmButtonText}>SVG</Text>
              </TouchableOpacity>
              <CheckingsComponent checkingsBalance={2043.12} lastFourDigits="1234" />
            </>
          ) : (
            <>
              <CheckingsComponent checkingsBalance={2043.12} lastFourDigits="1234" />
              <TouchableOpacity onPress={() => setIsSavings(true)}>
                <Text style={styles.confirmButtonText}>SVG</Text>
              </TouchableOpacity>
              <SavingsComponent savingsBalance={200.12} lastFourDigits="1234" />
            </>
          )}
        </View>
          <Text style={styles.amountText}>
            ${amount ? (Number(amount) / 100).toFixed(2) : '0.00'}
          </Text>

      <View style={styles.numPadContainer}>
        {numPad.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.numButton}
                onPress={() => {
                  if (item === '⌫') handleDelete();
                  else if (item === 'C') handleClear();
                  else handlePress(item);
                }}
              >
                <Text style={styles.numButtonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton}> <Text style={styles.confirmButtonText}> Confirm Transfer </Text>  </TouchableOpacity>
    </View>
  );
};

export default InternalTransferComponent

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
    marginTop: 20
  }, 
confirmButton: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width: '60%',
  alignSelf: 'center',
},

  confirmButtonText: {
    color: '#003366', 
    fontWeight: 400, 
    fontSize: 20, 
    textAlign: 'center'
  }, 
  componentHeaderText: {
    color: '#003366', 
    fontWeight: 'bold'
  }, 
  swapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
    componentBalanceText: {
    color: '#003366', 
    fontWeight: '300'
  }, 
  numPadContainer: {
    width: '80%',
    alignSelf: 'center', // centers the container horizontally
  }, row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  numButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  numButtonText: {
    fontSize: 24,
    color: '#003366',
    fontWeight: '600',
  },
    amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#003366',
    textAlign: 'center'
  },
});
