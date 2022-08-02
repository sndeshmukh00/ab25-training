import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const MyWishlist = () => {
    return(
        <View style = {styles.container}>
            <Text style = {{color:"skyblue",fontSize:18,fontWeight:"bold"}}>No Items In The WishList</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("New")}>
            <View style={styles.button}>
                   <Text style={styles.texts}>Shop Now</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          padding:20,
      },
      button:{
          height:40,
          width:200,
          backgroundColor:"#294b6f",
          borderRadius:5,
          alignItems:"center",
          justifyContent:"center",
          marginTop:10,
      },
      texts:{
          color:"#fff",
          fontWeight:"bold",
          fontSize:17,
  
      }
  })
  

export default MyWishlist;