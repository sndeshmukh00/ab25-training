import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Brands = () => {
    return (
        <View style={{marginVertical:15,}}>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "midnightblue", }}>Brands</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "midnightblue", }}>View All</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/coyuchi.png")}

                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                            }}
                        />

                    </View>
                    <Text numberOfLines={1}
                        ellipsizeMode="tail" style={styles.ImageText}>
                        Coyuchi
                    </Text>
                </View>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/parachute.png")}

                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                            }}
                        />

                    </View>
                    <Text 
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.ImageText}>
                        Parachute
                    </Text>
                </View>

                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/brooklinen.jpeg")}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                            }}
                        />

                    </View>
                    <Text style={styles.ImageText}>
                        BrookLinen
                    </Text>
                </View>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/sheridan.webp")}

                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                            }}
                        />

                    </View>
                    <Text 
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.ImageText}>
                        Sheridan
                    </Text>
                </View>
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    
    Border: {
        height: 80,
        width: 80,
        margin: 15,

        borderColor: "#ff8c00",
        borderWidth: 3,
    },
    ImageText: {
        marginLeft: 10,
        width: 90,
        fontSize: 13,
        textAlign: "center",
        justifyContent: "center",
        fontWeight:"bold",

    },
    shorts: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },


})

export default Brands;