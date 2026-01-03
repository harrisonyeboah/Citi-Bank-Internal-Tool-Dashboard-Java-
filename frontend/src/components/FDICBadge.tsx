import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import UbuntuText from './UbuntuText';




const FDICBadge: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Optional FDIC logo */}
      <Image
        source={require('../../assets/FDIC.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}> Yeboah is FDIC insured</Text>
    </View>
  );
};

export default FDICBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
