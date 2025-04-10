import React, { useState } from 'react';
import { View, Text, Button, Alert, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';
import { mainStrings, SCREEN_NAMES } from './string';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SaveScreen from './SaveScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  


  );
};



export default App;
