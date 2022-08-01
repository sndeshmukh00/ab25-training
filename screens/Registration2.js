import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState ,useEffect} from 'react'
import ModalDropdown from 'react-native-modal-dropdown'
import { BASE_URL } from '../env'




const Registration2 = ({ navigation }) => {
    var  data = [
         
              "Andaman and Nicobar Island (UT)"
          ,
         
              "Andhra Pradesh"
          ,
          
              "Arunachal Pradesh"
          ,
                      
              "Assam"
          ,
          
            
              "Bihar"
          ,
          
            
              "Chandigarh (UT)"
          ,
          
            
              "Chhattisgarh"
          ,
          
            
              "Dadra and Nagar Haveli (UT)"
          ,
          
            
              "Daman and Diu (UT)"
          ,
          
            
              "Delhi (NCT)"
          ,
          
            
              "Goa"
          ,
          
            
              "Gujarat"
          ,
          
            
              "Haryana"
          ,
          
            
              "Himachal Pradesh"
          ,
          
            
              "Jammu and Kashmir"
          ,
          
            
              "Jharkhand"
          ,
          
            
              "Karnataka"
          ,
          
            
              "Kerala"
          ,
          
            
              "Lakshadweep (UT)"
          ,
          
            
              "Madhya Pradesh"
          ,
          
            
              "Maharashtra"
          ,
          
            
              "Manipur"
          ,
          
            
              "Meghalaya"
          ,
          
            
              "Mizoram"
          ,
          
            
              "Nagaland"
          ,
          
            
              "Odisha"
          ,
          
            
              "Puducherry (UT)"
          ,
          
            
              "Punjab"
          ,
          
            
              "Rajasthan"
          ,
          
            
              "Sikkim"
          ,
          
            
              "Tamil Nadu"
          ,
          
            
              "Telangana"
          ,
          
            
              "Tripura"
          ,
          
            
              "Uttarakhand"
          ,
          
            
              "Uttar Pradesh"
          ,
          
            
              "West Bengal"
          
    ]
    const [company, setCompany] = useState("")
    const [representative, setRepresentative] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [state, setState] = useState("")
    const [city, SetCity] = useState("")
    const [pincode, setPincode] = useState("")

    const submitHandler = async () => {
        fetch(`${BASE_URL}v1/user/register/step-two/user-address-detail`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "company": `${company}`,
                "representative": `${representative}`,
                "billing_address": `${address1}`,
                "billing_address_two": `${address2}`,
                "billing_state_id": `${state}`,
                "billing_district_id": `${city}`,
                "billing_pincode": `${pincode}`
            })

        })
            .then(response => response.json())
            .then(res => {
                // console.log(res)
                if (res.response === "error") {
                    return
                } else {
                    navigation.navigate("login")
                }
            })
            .catch(error => console.log(error))

    }
    
    useEffect(() => {
    //   getState()
    
      return () => {
        
      }
    }, [])
    

    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#294b6f", marginTop: 50 }}>Registration</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ff8c00", marginTop: 15 }}>Fill The Billing Detail Form</Text>
            <View style={styles.index}>
                <View style={styles.dark}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft: 7, }}>
                        Billing Address
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Company Name "
                        value={company}
                        onChangeText={(text) => setCompany(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Representative Name"
                        value={representative}
                        onChangeText={(text) => setRepresentative(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Address Line 1 "
                        value={address1}
                        onChangeText={(text) => setAddress1(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Address Line 2 "
                        value={address2}
                        onChangeText={(text) => setAddress2(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <ModalDropdown onSelect={(text) => setState(text)} style={{ fontSize: 20, marginLeft: 10, }}  options={data}/>
                    {/* <TextInput
                        placeholder="State "
                        value={state}
                        onChangeText={(text) => setState(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} /> */}
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="City "
                        value={city}
                        onChangeText={(text) => SetCity(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Pincode "
                        value={pincode}
                        onChangeText={(text) => setPincode(text)}
                        style={{ fontSize: 20, marginLeft: 10, }} />
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
        borderWidth: 1,
        borderColor: "#ff8c00",
        borderRadius: 5,
        marginTop: 20,
        justifyContent: "center",
    },
    index: {
        height: 510,
        width: "90%",
        borderWidth: 1,
        borderColor: "#294b6f",
        borderRadius: 8,
        marginTop: 30,
    },
    dark: {
        height: 35,
        width: "100%",
        backgroundColor: "#294b6f",
        justifyContent: "center",
    },
})

export default Registration2;