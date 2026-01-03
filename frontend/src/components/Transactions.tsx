import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import UbuntuText from './UbuntuText';
import OneTransaction from './OneTransaction';




const Transactions: React.FC = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.transactionsHeader}> Transactions </Text>
        </View>
        <View>
            <OneTransaction date='12/29' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
            <OneTransaction date='12/25' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
            <OneTransaction date='12/24' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
            <OneTransaction date='12/29' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
            <OneTransaction date='12/25' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
            <OneTransaction date='12/24' method='Debit' vendor='McDonalds' amount={8.99}></OneTransaction>
        </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#003366',
    fontWeight: '500',
  },
  transactionsHeader: {
    fontSize: 15, 
    color: '#003366',
    fontWeight: 'bold'
  }
});
