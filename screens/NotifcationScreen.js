import { StyleSheet, Text,Button, View } from 'react-native'
import React from 'react'


const NotifcationScreen = () => {
  return(
      <View style ={styles.container}>
          <Text style = {{color:"skyblue",fontSize:18,fontWeight:"bold"}}>No Notifications Here</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default NotifcationScreen;