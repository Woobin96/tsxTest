import React, { useState } from 'react';
import {
  View, Text, Button, Alert, ToastAndroid, TouchableOpacity, StyleSheet,
} from 'react-native';
import styles from './style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { mainStrings } from './string';
import { SCREEN_NAMES } from './string';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MemoScreen from './MemoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const App = () => {

  const Stack = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME} 
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName ;

            if(route.name == SCREEN_NAMES.HOME) {
              iconName = focused ? SCREEN_NAMES.HOME : 'home-outline';
            } else if (route.name == SCREEN_NAMES.MEMO) {
              iconName = focused ? SCREEN_NAMES.MEMO : 'settings-outline';
            }
              return <Ionicons name= {iconName} size = {size} color = {color}/>
          }

        })}
      >

        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.MEMO} component={MemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};





export default App;
