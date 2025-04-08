import React, { useState } from 'react';
import {
  View, Text, Button, Alert, ToastAndroid, TouchableOpacity, StyleSheet,
} from 'react-native';
import styles from './style';
import { mainStrings } from './string';


const MemoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 두 번 째 화 면</Text>
    </View>
  );
};





export default MemoScreen;
