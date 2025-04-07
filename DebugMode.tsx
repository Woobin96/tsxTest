import React from 'react';
import { View, Text, Button} from 'react-native';
import style from './style';


const DebugMode = ({ goBack }: { goBack: () => void }) => {


    return (
        <View style={style.container}>

            <Button title = '뒤로가기' onPress={goBack}></Button>
            <Text style={style.text}>
                Debug Mode
            </Text>
        </View>
    );
};


export default DebugMode;
