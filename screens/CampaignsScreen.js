// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CampaignsScreen = () => {
  return (
    <View>
        <Text>Hello</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CampaignsScreen;
