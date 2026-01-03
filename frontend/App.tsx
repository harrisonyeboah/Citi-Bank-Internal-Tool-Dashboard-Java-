import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// This is my navigations import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/screens/Login';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import ForgotBox from './src/components/ForgotBox';
import Home from './src/screens/Home';
import Services from './src/screens/Services';
import Transfers from './src/screens/Transfers';
import Invest from './src/screens/Invest';



export default function App() {
    const Stack = createNativeStackNavigator();

    const loadFonts = async () => {
    await Font.loadAsync({
      'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
      'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      'Ubuntu-Italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
    });
  };

  if (!loadFonts) {
    return <AppLoading startAsync={loadFonts} onFinish={() => {}} onError={console.warn} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Transfers" component={Transfers} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Invest" component={Invest} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
