import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { getData } from '../asyncstorage'

const Front = ({navigation}) => {
    
    const getToken = async()=>{
        var a = await getData('token');
        if(a != null){
            navigation.navigate("drawer")
        }
    }
    useEffect(() => {
    
        getToken()

      return () => {
        
      }
    }, [])
    
    return (
        <View style={styles.Container}>
           
            <View style={styles.Container}>
                <View style = {{flexDirection:"row"}}>
                    <Text style={{ color: "#ff8c00", fontSize: 30, fontWeight: "bold" }}>BULK</Text>
                    <Text style={{ color: "#294b6f", fontSize: 30, fontWeight: "bold" }}>BAJAAR</Text>
                </View>
                <Text style={{marginTop:10,fontSize:15,}}>Banaye Business Behtar</Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                    <View style={styles.button}>
                        <Text style={styles.text1}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("reg1")}>
                    <View style={styles.button}>
                        <Text style={styles.text1}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text1: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
    },
    button: {
        height: 40,
        width: 280,
        backgroundColor: "#294b6f",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
})

export default Front;