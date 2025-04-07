import React, { useState } from 'react';
import { View, Text, Button, Alert, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';
import DebugMode from './DebugMode';


const App = () => {

  const [count, setCount] = useState(0);
  const [showOtherPage, setShowOtherPage] = useState(false);

  const DebugModeTC = () => {
    const Num = count + 1;
    setCount(Num);

    if (Num == 5) {
      setShowOtherPage(true);
      setCount(0);
      console.info(setCount);

    }
  };


  if (showOtherPage) {
    return <DebugMode goBack={() => setShowOtherPage(false)} />;
  }

  return (
    <View style={{ flex: 1 }}>

      <View>
        <TouchableOpacity onPress={DebugModeTC}>
          <Text style={styles.debugText}>ㅁ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}> 당신은 이 버튼을 눌러야 함.</Text>
        <Button title='눌러주시오' onPress={btnAlert} />
      </View>

    </View>


  );
};

// 버튼 클릭 이벤트 
const btnAlert = () => {
  // Alert.alert('Button Test'); // Alert
  ToastAndroid.show('Toast MSG', ToastAndroid.LONG); // Toast
  console.log('log');
  console.info('info');
  // console.warn('경고 테스트');
  // console.error('에러 테스트');
}




export default App;
