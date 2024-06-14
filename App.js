// App.js
import React, { useEffect } from 'react';
import MainTabNavigator from '../rn_application/navigation/MainTabNavigator';
import KeycloakService from './KeycloakService';

export default function App() {
/*   useEffect(() => {
    KeycloakService.initKeycloak(() => {
      console.log('Keycloak initialized');
    });
  }, []); */
  return <MainTabNavigator />;
}
