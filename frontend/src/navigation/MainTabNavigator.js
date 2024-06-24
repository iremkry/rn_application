// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MoviesScreen from '../screens/MoviesScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          headerBackTitleVisible: true,
          headerBackTitle: 'Detail',
          headerBackTitleStyle: { fontSize: 30 },
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
