import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createNativeStackNavigator();

export default function AppStack (){
    return(
        <Stack.Navigator screenOptions={{headerShown: true}}>
            {/* <Stack.Screen name="Main" component={HomeScreen}/>
            <Stack.Screen name="List" component={ListScreen}/> */}
            <Stack.Screen name="Test" component={TestScreen}/>
        </Stack.Navigator>
    );
};