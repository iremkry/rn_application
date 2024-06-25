// components/MonthlyExpenseChart.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MonthlyExpenseChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <LineChart
        data={{
          labels: data.labels,
          datasets: [
            {
              data: data.values,
            },
          ],
        }}
        width={screenWidth - 16} // from react-native
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default MonthlyExpenseChart;
