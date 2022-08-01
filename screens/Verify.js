import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BASE_URL, DEVICE_TOKEN } from '../env'
import {asyncstorage, storeData} from '../asyncstorage'

const Verify = ({ navigation, route }) => {
  const [otp, setOtp] = useState('')

  const submitHandler = async () => {
    fetch(`${BASE_URL}v1/user/access_step_two`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "mobile": `${route.params.mobile}`,
        "otp": `${otp}`,
        "device_token": `${DEVICE_TOKEN}`
      })

    })
      .then(response => response.json())
      .then(res => {
        // console.log(res)
        if (res.response === "error") {
          return
        } else {
          if (route.params.fromlogin && res.data.access_token ) {
            storeData('token',res.data.access_token)
            storeData('user',res.data)
            navigation.navigate("drawer",{login:true})
          } else {
            navigation.navigate("regis1",{mobile:route.params.mobile})
          }
        }
      })
      .catch(error => console.log(error))

  }


  useEffect(() => {
    setOtp(route.params.res.otp)

    return () => {

    }
  }, [])



  return (
    <View style={styles.container}>
      <View style={[styles.index, styles.elevation]}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20, }}>OTP Verification</Text>
        <Text style={{ fontSize: 15, marginTop: 10, }}>Verify Your Mobile Number</Text>
        <View style={styles.form}>
          <TextInput
            keyboardType="number-pad"
            placeholder=" Enter OTP "
            defaultValue={`${otp}`}
            value={`${otp}`}
            onChangeText={(text) => setOtp(text)}
            style={{ fontSize: 20, marginLeft: 10, }} />
        </View>
        
          <TouchableOpacity onPress={() => submitHandler()}>
            <View style={styles.button}>
              <Text style={styles.text1}>Verify</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: 200,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  text1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    height: 40,
    width: 160,
    backgroundColor: "#294b6f",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  index: {
    alignItems: "center",
    // justifyContent:"center",
    width: "85%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 370,
    // marginTop: 200,
    backgroundColor: "#cce7e8"
  },
  elevation: {
    elevation: 30,
    shadowColor: 'black',
  },
})


export default Verify;