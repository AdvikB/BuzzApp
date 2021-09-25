import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBook from './screens/fb'
import Instagram from './screens/in'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const tabNavigator = createBottomTabNavigator({
  FaceBook : {screen : FaceBook},
  Instagram : {screen : Instagram}
},

const AppContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
