import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authstack from './Authstack';
import Drawers from './Drawers';

const Stack = createNativeStackNavigator();

const Main = () =>{
    return(
        <Stack.Navigator initialRouteName='auth'
        screenOptions={{
            headerShown: false
        }}> 
            <Stack.Screen
                name='auth'
                component={Authstack}               
            />
            <Stack.Screen
                name='drawer'
                component={Drawers}
            />
        </Stack.Navigator>
    )
}

export default Main;