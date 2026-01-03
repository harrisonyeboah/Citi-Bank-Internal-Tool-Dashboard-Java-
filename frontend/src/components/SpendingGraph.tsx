import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const SpendingGraph: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
      "Ubuntu-Light": require("../../assets/fonts/Ubuntu-Light.ttf"),
      "BBHBartle-Regular": require("../../assets/fonts/BBHBartle-Regular.ttf"),
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  // Generate last 7 days labels
const last7DaysLabels = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (6 - i));
  const month = d.getMonth() + 1; // getMonth() is 0-based
  const day = d.getDate();
  return `${month}/${day}`;
});

  // Example daily spending data for last 7 days
  const thisMonthData = [22, 30, 28, 35, 40, 38, 45];

  // Convert to cumulative data
  const cumulativeData = thisMonthData.reduce<number[]>((acc, value, index) => {
    acc.push((acc[index - 1] ?? 0) + value);
    return acc;
  }, []);

  const lineData = {
    labels: last7DaysLabels,
    datasets: [
      { data: cumulativeData, strokeWidth: 2 },
    ],
  };

  const chartWidth = cumulativeData.length * 40; // 40px per day

  const chartConfig = {
    backgroundColor: '#ffffffff',
    backgroundGradientFrom: '#ffffffff',
    backgroundGradientTo: '#ffffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
    propsForDots: { r: '0', strokeWidth: '0', stroke: '#fff' },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Total Spending Last 7 Days</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={lineData}
          width={last7DaysLabels.length * 60}
          height={160}
          chartConfig={chartConfig}
          bezier
          withHorizontalLines={false}
          withVerticalLines={false}
          withInnerLines={false}
          style={styles.chart}
          
        />
      </ScrollView>
    </View>
  );
};

export default SpendingGraph

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
    marginTop: 25,
    alignItems: 'center',
  },
  innerText: {
    color: '#003366',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  chart: {
    borderRadius: 16,
  },
});
