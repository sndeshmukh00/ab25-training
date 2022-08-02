import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Front from '../screens/Front';
import Registration1 from '../screens/Registration1';
import Registration2 from '../screens/Registration2';
import Login from '../screens/Login';
import Register1 from '../screens/Register1';
import Verify from '../screens/Verify';

const Stack = createNativeStackNavigator();

const Authstack = () => {
    return (
        <Stack.Navigator initialRouteName='front'
            screenOptions={{
                    headerShown:false,
            }}>
            <Stack.Screen
                name='front'
                component={Front}
            />
            <Stack.Screen
                name='login'
                component={Login}
            />
            <Stack.Screen
                name='reg1'
                component={Register1}
            />
            <Stack.Screen
                name='verify'
                component={Verify}
            />
            <Stack.Screen
                name='regis1'
                component={Registration1}
            />
            <Stack.Screen
                name='regis2'
                component={Registration2}
            />
        </Stack.Navigator>
    )
}

export default Authstack;