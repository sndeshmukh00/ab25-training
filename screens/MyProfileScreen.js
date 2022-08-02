import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { getData } from '../asyncstorage';


const MyProfileScreen = ({ navigation }) => {
    const [user,setUser] = useState("") ;
    const temp = async()=>{
        var a = await getData('user');
        // const temp = JSON.parse(a);
        setUser(a);
    }
    // var tee = JSON.parse(token)
    useEffect(() => {
      temp()
    
      return () => {
        
      }
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Image
                        source={require("../assets/icons/man.png")}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 100,
                            marginLeft: -70,
                        }
                        }
                    />
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#294b6f", }}>{user.name}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "bold", color: "#294b6f", marginTop: 5, }}>{user.mobile}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "bold", color: "#294b6f", marginTop: 5, }}>{user.email}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("New")}>
                    <View style={styles.button}>
                        <Text style={styles.texts}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ width: "90%", marginTop: 13, }}>
                <TouchableOpacity onPress={() => navigation.navigate("MyProf",user)}>
                    <View style={styles.extras}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require("../assets/icons/eye.png")}
                                resizeMode="contain"
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: "#294b6f",
                                }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#294b6f", }}>  Profile </Text>
                        </View>
                        <Image
                            source={require("../assets/icons/right-arrow.png")}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "#294b6f",
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Change")}>
                    <View style={styles.extras}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require("../assets/icons/key.png")}
                                resizeMode="contain"
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: "#294b6f",
                                }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#294b6f", }}>  Change Password </Text>
                        </View>

                        <Image
                            source={require("../assets/icons/right-arrow.png")}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "#294b6f",
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.extras}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require("../assets/icons/address-book.png")}
                                resizeMode="contain"
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: "#294b6f",
                                }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#294b6f", }}>  Address Book </Text>
                        </View>
                        <Image
                            source={require("../assets/icons/right-arrow.png")}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "#294b6f",
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 13,
    },
    first: {
        height: 180,
        width: "90%",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        // justifyContent: "center",

    },
    button: {
        height: 40,
        width: 310,
        backgroundColor: "#294b6f",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    extras: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginTop: 10,
    },
    texts: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
    },
})

export default MyProfileScreen;