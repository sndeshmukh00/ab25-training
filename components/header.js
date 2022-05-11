import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.index}>
            <View style={styles.short}>
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
                <Text style={{ color: "#ff8c00", fontSize: 20, marginLeft: 20, marginTop: 13, fontWeight: "bold" }}>BULK</Text>
                <Text style={{ color: "#fff", fontSize: 20, marginTop: 13, fontWeight: "bold", }}>BAJAAR</Text>

                <Image
                    source={require('../assets/icons/shopping-cart.png')}

                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        marginLeft: 110,
                        marginTop: 20,
                        // position:"absolute"
                        tintColor: "#ff8c00",
                    }
                    }
                />
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

        padding: 5,
        height: 100,
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