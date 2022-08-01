import { StyleSheet, Text,TextInput, TouchableOpacity,View } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { BASE_URL,DEVICE_TOKEN } from '../env'



const Registration1 = ({navigation,route}) => {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const submitHandler = async() => {
        fetch(`${BASE_URL}v1/user/register/step-one/user-detail`,{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "name":`${name}`,
            "mobile":`${route.params.mobile}`,
            "email":`${email}`,
            "password":`${password}`,
            "password_confirmation":`${confirm}`,
            "device_token": `${DEVICE_TOKEN}`
        })

    })
    .then(response => response.json())
    .then(res => {
    //   console.log(res)
      if (res.response === "error") {
        return
      } else {
        navigation.navigate("regis2")}
    })
    .catch(error => console.log(error))

}


useEffect(() => {
  setMobile(route.params.mobile)

  return () => {

  }
}, [])

    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#294b6f",marginTop:50}}>Registration</Text>
            <Text style={{fontSize:18,fontWeight:"bold",color:"#ff8c00",marginTop:15}}>Fill The Form Below</Text>
            <View style={styles.index}>
                <View style={styles.dark}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft: 7, }}>
                        User Detail
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput 
                    placeholder="Name " 
                    value={name}
                    onChangeText = {(text) => setName(text)}
                    style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput 
                    keyboardType="number-pad" 
                    placeholder="Mobile Number" 
                    defaultValue= {`${mobile}`}
                    value = {`${mobile}`}
                    onChangeText = {(text) => setMobile(text)}
                    style={{ fontSize: 20, marginLeft: 10, }}/>
                </View>
                <View style={styles.form}>
                    <TextInput 
                    placeholder="Email " 
                    value={email}
                    onChangeText = {(text) => setEmail(text)}
                    style={{ fontSize: 20, marginLeft: 10, }}/>
                </View>
                <View style={styles.form}>
                    <TextInput 
                    placeholder="Password " 
                    value={password}
                    onChangeText = {(text) => setPassword(text)}
                    style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput 
                    placeholder="Confirm Password " 
                    value={confirm}
                    onChangeText = {(text) => setConfirm(text)}
                    style={{ fontSize: 20, marginLeft: 10, }}/>
                </View>
            </View>
            <TouchableOpacity onPress={() => submitHandler()}>
          <View style={styles.button}>
            <Text style={styles.text1}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      
    },
    text1: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
      },
      button: {
        height: 45,
        width: 350,
        backgroundColor: "#ff8c00",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      },
    form: {
        marginLeft: 15,
        width: "90%",
        height: 45,
        borderWidth:1,
        borderColor:"#ff8c00",
        borderRadius: 5,
        marginTop: 20,        
        justifyContent:"center",
    },
    index: {
        height: 390,
        width: "90%",
        borderWidth: 1,
        borderColor: "#294b6f",
        borderRadius: 8,
        marginTop:30,
    },
    dark: {
        height: 35,
        width: "100%",
        backgroundColor: "#294b6f",
        justifyContent: "center",
    },
})

export default Registration1;