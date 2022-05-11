import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Arrival = () => {
    return (
        <View style={{ flexDirection: "row", margin: 20, }}>
            <View>
                <Image
                    source={require("../assets/category/handshake.png")}
                    resizeMode="contain"
                    style={{
                        height: 35,
                        width: 35,
                        tintColor: "#ff8c00",
                        marginLeft: 60,
                    }}
                />
                <Text style={{ fontSize: 35, color: "#294b6f", fontWeight: "bold", textAlign: 'center' }}>bulkbajaar</Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>Banaye Business Behtar!</Text>
            </View>
            <View style={styles.arrivals}>
                <Text style={{ fontSize: 15, color: "midnightblue", fontWeight: "bold", textAlign: 'center', marginTop: 30, }}>New Arrivals</Text>
                <View style={styles.shop}>
                    <Text style={{ fontSize: 14, color: "#fff" }}>Shop Now</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    arrivals: {
        height: 100,
        width: 180,
        backgroundColor: "#ff8c00",
        marginLeft: 10,
        //marginTop:40,
        borderRadius: 10,
    },
    shop: {
        height: 27,
        width: 100,
        textAlign: "center",
        backgroundColor: "midnightblue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 40,

    },
})

export default Arrival;