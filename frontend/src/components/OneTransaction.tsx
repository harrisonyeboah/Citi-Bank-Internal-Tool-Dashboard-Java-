import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import UbuntuText from './UbuntuText';


type OneTransactionProps = {
  date: string;
  method: string;
  vendor: string;
  amount: number;
};

const OneTransaction: React.FC<OneTransactionProps> = ({date, method, vendor, amount}) => {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.vendorText}> {vendor} </Text>


            <View style={styles.leftInnerContainer}>
                <Text style={styles.dateText}> {date} </Text>
                <Text style={styles.dateText}> | </Text>
                <Text style={styles.methodText}> {method} </Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.amountText}> ${amount} </Text>
        </View>
    </View>
  );
};

export default OneTransaction;

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',     
    justifyContent: 'space-between', 
    alignItems: 'center',       
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
    },
  vendorText: {
    fontWeight: 'bold', 
    fontSize: 15, 
    color: '#003366'
  }, 
  dateText : {
    color: '#003366'
  }, 
  amountText: {
    color: '#003366',
    fontWeight: 500
  },
  methodText: {
    color: '#003366'
  }, 
  leftInnerContainer: {
    flexDirection: 'row', 
  }, 
  leftContainer: {

  }, 
  rightContainer: {

  }

});
