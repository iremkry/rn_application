// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabNavigator /> : <LoginScreen setIsLoggedIn={setIsLoggedIn}/>}
    </NavigationContainer>
  );
};

export default App;
