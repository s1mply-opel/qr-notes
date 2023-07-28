import { Button, TextArea, View , NativeBaseProvider, ScrollView} from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({navigation}){
    const [text, setText] = useState('');

    

    return(
        <NativeBaseProvider>
            <ScrollView style={Styles.textArea}>
                <View>
                    <TextArea value={text} onChangeText={t => setText(t)}/> 
                    <Button onPress={() => navigation.navigate('List')}>Press me</Button>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

const Styles = StyleSheet.create({
    textArea:{
        paddingHorizontal: 25
    },
    container:{

    },
    button:{

    },
});