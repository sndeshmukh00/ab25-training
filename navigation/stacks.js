import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from "../screens/NewScreen";

const Stack = createNativeStackNavigator();

const Stacks = () =>{
    return(
      
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='New' component={NewScreen} />
        </Stack.Navigator>
        
    )

}

export default Stacks;


