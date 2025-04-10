import React, { useState } from 'react';
import { View, Text,  } from 'react-native';
import styles from './style';
import {mainStrings,SCREEN_NAMES} from './string';


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> HOME </Text>
    </View>


  );
};



export default HomeScreen;
