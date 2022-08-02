import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import { BASE_URL } from '../env'


const Login = ({navigation}) => {
  const[mobile,setMobile] = useState("")
  const[isReg,setIsReg] = useState(true);
  const submitHandler = async() => {
    fetch(`${BASE_URL}v1/user/access_step_one`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({"mobile":`${mobile}`})
  
  })
  .then(response => response.json() )
  .then(res=>{
    // console.log(res)
    if(res.response==="validation_error"){
      return
    }else if(res.action === "register"){
      setIsReg(false);
    }
    else{
      navigation.navigate("verify",{fromlogin:true,res,mobile})
    }
  })
   .catch(error=>console.log(error)) 
   
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center",  }}>
      <Text style={{ color: "#ff8c00", fontSize: 30, fontWeight: "bold", marginTop:100}}>
        BULK
        <Text style={{ color: "#294b6f", fontSize: 30, fontWeight: "bold" }}>BAJAAR</Text>
      </Text>
      <View style={[styles.index, styles.elevation]}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20, }}>LOGIN</Text>
        <Text style={{ fontSize: 15, marginTop: 10, }}>Login to your account</Text>
        <View style={styles.form}>
          <TextInput 
          keyboardType="number-pad" 
          placeholder=" Enter your mobile "
          value={mobile} 
          onChangeText = {(text) => setMobile(text)}
          style={{ fontSize: 20, marginLeft: 10, }} />
        </View>
        <TouchableOpacity onPress={() => submitHandler()}>
          <View style={styles.button}>
            <Text style={styles.text1}>Login</Text>
          </View>
        </TouchableOpacity>
        {
          !isReg ? 
          <View>
          {Alert.alert("You are not registered")}
        </View> :
        <></>
        }
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    width: 270,
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
    width: 230,
    backgroundColor: "#ff8c00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  index: {
    alignItems: "center",
    width: "85%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 270,
    marginTop: 50,
    backgroundColor: "#cce7e8"
  },
  elevation: {
    elevation: 30,
    shadowColor: 'black',
  },
})

export default Login;