
import React from 'react';

import { Image ,View,Text,} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';  

import HomeScreen from '../screens/HomeScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyProfileScreen from '../screens/MyProfileScreen'
import NotifcationScreen from '../screens/NotifcationScreen'
import Stacks from './stacks';

const Tab  = createBottomTabNavigator();


const  Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={{
       headerShown:false,
       tabBarShowLabel: true,
       tabBarActiveTintColor:"orange",
       tabBarInactiveTintColor:"grey",
       tabBarStyle:{
         backgroundColor:"#fff"
     }
     }}>
    
        <Tab.Screen name="Home" component = {Stacks} options = {{
           tabBarIcon : ({focused})   => {
             return(
             <View style={{justifyContent:"center", alignItems:"center",}}>
               <Image
                source={require('../assets/icons/home.png')}
                resizeMode = 'contain'
                style = {{
                  width:20,
                  height:20,
                  tintColor : focused ?  "orange" : "grey"
                }}
               />
              
             </View>
             )
           },
        }}/>
        <Tab.Screen name="My Order" component = {MyOrdersScreen} options= {{
          tabBarIcon : ({focused})   => {
            return(
            <View style={{justifyContent:"center", alignItems:"center",}}>
              <Image
               source={require('../assets/icons/more.png')}
               resizeMode = 'contain'
               style = {{
                 width:20,
                 height:20,
                 tintColor : focused ?  "orange" : "grey"
               }}
              />
             
            </View>
            )
          },
       }}/>
        <Tab.Screen name="My Profile" component = {MyProfileScreen} options= {{
          tabBarIcon : ({focused})   => {
            return(
            <View style={{justifyContent:"center", alignItems:"center",}}>
              <Image
               source={require('../assets/icons/user.png')}
               resizeMode = 'contain'
               style = {{
                 width:20,
                 height:20,
                 tintColor : focused ?  "orange" : "grey"
               }}
              />
             
            </View>
            )
          },
       }}/>
        <Tab.Screen name="Notification" component = {NotifcationScreen} options= {{
          tabBarIcon : ({focused})   => {
            return(
            <View style={{justifyContent:"center", alignItems:"center",}}>
              <Image
               source={require('../assets/icons/bell.png')}
               resizeMode = 'contain'
               style = {{
                 width:20,
                 height:20,
                 tintColor : focused ?  "orange" : "grey"
               }}
              />
             
            </View>
            )
          },
       }}/>
    </Tab.Navigator>
  )
}

export default Tabs;