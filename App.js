import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import * as Font from 'expo-font';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

export default function App(){
	
	// const loadFonts = async () =>{
	// 	await Font.loadAsync({
	// 		'Roboto-Medium': require("./src/assets/fonts/Roboto-Medium.ttf"),
	// 	});
	// };
	

	return(
		<NavigationContainer>
			{/* <AuthStack/> */}
			<AppStack/>
		</NavigationContainer>
	);
};

