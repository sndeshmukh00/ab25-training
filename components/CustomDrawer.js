import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItem,DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) =>  {
  return (
    <DrawerContentScrollView{...props} >
      <DrawerItemList {...props}/>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Homee")}
      />
      <DrawerItem
        label="Help"
        onPress={() => props.navigation.navigate("MyC")}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({})

export default CustomDrawer;