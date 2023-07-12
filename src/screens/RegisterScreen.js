import { Button, NativeBaseProvider, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';


export default function RegisterScreen({ navigation }){
    const [open, setOpen] = useState(false);

    return(
        <NativeBaseProvider>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
                <View style={Styles.logoContainer}>
                    <Image source={require(`../assets/images/cats.jpg`)} style={Styles.logo} />
                </View>
                
                <Text style={Styles.registerText}></Text>

                <Text>Username</Text>
                <TextInput></TextInput>
                <Text>Email</Text>
                <TextInput></TextInput>
                <Text>Password</Text>
                <TextInput></TextInput>
                <Text>Confirm Password</Text>
                <TextInput></TextInput>

                <Button height={10} onPress={() => navigation.navigate('Login')}> Go to Login Button</Button>
            </ScrollView>
        </NativeBaseProvider>
            
    );
};

const Styles = StyleSheet.create({
        container:{
            paddingHorizontal: 25
        },
        logoContainer: {
            alignItems: 'center'
        },
        logo:{
            height: 150,
            width: 150,
        },
        registerText:{
            // fontFamily:'Roboto-Medium',
            fontSize:12,
            fontWeight: '500',
        }

});