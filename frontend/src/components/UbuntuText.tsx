import React from 'react';
import { Text, TextProps } from 'react-native';


const UbuntuText: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text {...props} style={[{ fontFamily: 'Ubuntu-Regular' }, style]} />;
};

export default UbuntuText;
