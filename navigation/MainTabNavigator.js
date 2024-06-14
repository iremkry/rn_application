// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import SoftwaresScreen from '../screens/SoftwaresScreen';
//import MapScreen from '../screens/MapScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Vehicles" component={VehiclesScreen} />
            <Tab.Screen name="Softwares" component={SoftwaresScreen} />
            <Tab.Screen name="Updates" component={UpdatesScreen} />
            <Tab.Screen name="Campaigns" component={CampaignsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
