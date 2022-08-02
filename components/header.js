import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import Drawers from '../navigation/Drawers';

const Header = ({navigation}) => {
    return (
        <View style={styles.index}>
            <View style={styles.short}>
                <TouchableOpacity onPress={() => navigation.openDrawer() }>
                <Image
                    source={require("../assets/icons/more.png")}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: "#ff8c00",
                        marginTop: 20,
                        marginLeft: 10,
                    }
                    }
                />
                </TouchableOpacity>
                <Text style={{ color: "#ff8c00", fontSize: 20, marginLeft: 20, marginTop: 13, fontWeight: "bold" }}>BULK</Text>
                <Text style={{ color: "#fff", fontSize: 20, marginTop: 13, fontWeight: "bold", }}>BAJAAR</Text>

                <TouchableOpacity onPress= {()=> navigation.navigate("MyC")}>
                    <Image
                        source={require('../assets/icons/shopping-cart.png')}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 110,
                            marginTop: 20,
                            tintColor: "#ff8c00",
                        }
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=> navigation.navigate("MyW")}>
                    <Image
                        source={require('../assets/icons/heart.png')}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 20,
                            marginTop: 20,
                            tintColor: "#ff8c00",
                        }
                        }
                    />
                </TouchableOpacity >
            </View>
            <View style={styles.form}>
                <TextInput placeholder=" " />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    form: {
        marginLeft: 15,
        width: "90%",
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: 8,

    },

    index: {

        padding: 10,

        height: 120,
        width: '100%',
        alignItems: "flex-start",
        justifyContent: 'center',
        backgroundColor: '#294b6f',
    },
    short: {
        flexDirection: 'row',
    },

})

export default Header;