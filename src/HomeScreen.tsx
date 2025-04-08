import React, { useState } from 'react';
import {
  View, Text, Button, Alert, ToastAndroid, TouchableOpacity, StyleSheet, 
} from 'react-native';
import styles from './style';
import { mainStrings } from './string';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 홈 화 면</Text>
    </View>
  );
};





export default HomeScreen;
