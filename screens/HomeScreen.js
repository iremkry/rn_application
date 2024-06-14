// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, ScrollView, RefreshControl, TouchableOpacity  } from 'react-native';
import vehiclesIcon from '../assets/vehicles.png';
import softwaresIcon from '../assets/softwares.png';
import updatesIcon from '../assets/updates.png';
import campaignsIcon from '../assets/campaigns.png';

const HomeScreen = ({ navigation }) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Vehicles')}>
          <Image source={vehiclesIcon} style={styles.icon} />
          <Text style={styles.boxText}>Vehicles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Softwares')}>
          <Image source={softwaresIcon} style={styles.icon} />
          <Text style={styles.boxText}>Softwares</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Updates')}>
          <Image source={updatesIcon} style={styles.icon} />
          <Text style={styles.boxText}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Campaigns')}>
          <Image source={campaignsIcon} style={styles.icon} />
          <Text style={styles.boxText}>Campaigns</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: 50, // Adjust the width and height as needed
    height: 50,
  },
  box: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  boxText: {
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
