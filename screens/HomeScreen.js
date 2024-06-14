// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView, RefreshControl } from 'react-native';

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
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => [navigation.navigate('Profile'), Alert.alert('Simple Button pressed')] }
        />
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
