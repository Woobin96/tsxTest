import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { readExcelData } from './readExcel'; // 엑셀 파서 함수
import { MainString } from './String';
import { styles } from './Style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { copyExcelFileOnce } from './copyExcel';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    const init = async () => {
      await copyExcelFileOnce();
      const result = await readExcelData();
      setData(result);
    };
    init();
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Heatwave" component={HeatwaveScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
};






export default App;
