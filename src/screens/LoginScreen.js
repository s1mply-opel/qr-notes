import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Button, NativeBaseProvider} from 'native-base'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function LoginScreen({navigation}){
    return(
        <NativeBaseProvider>
            <View>
                <Image source={require(`../assets/images/cats.jpg`)} />
                <Text>Username</Text>
                <TextInput>Enter Username</TextInput>
                <Text>Password</Text>
                <TextInput>Enter Password</TextInput>
                <Button onPress={() => navigation.goBack()}>
                    Go to register page
                </Button>
            </View>
        </NativeBaseProvider>
    );
};