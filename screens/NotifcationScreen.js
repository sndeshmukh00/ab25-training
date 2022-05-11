import { StyleSheet, Text,Button, View } from 'react-native'
import React from 'react'


const NotifcationScreen = () => {
  return(
      <View style ={styles.container}>
          <Text>Notification Screen</Text>
          <Button
          title='CLICK HERE'
          onPress = {() => alert('Button Clicked')}
          />
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue'
    }
})

export default NotifcationScreen;