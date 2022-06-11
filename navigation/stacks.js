import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from "../screens/NewScreen";


const Stack = createNativeStackNavigator();

const Stacks = () =>{
    return(
      
        <Stack.Navigator initialRouteName='Homee'>
            <Stack.Screen 
               name='Homee' 
               component={HomeScreen}
               options={{
                    headerShown:false               
               }

               }
                />
            <Stack.Screen 
                name='New' 
                component={NewScreen} 
                options={{
                    title:"Shop By Category"
                }}
                />
        </Stack.Navigator>
        
    )

}

export default Stacks;


