import { StyleSheet, Text, Button, View, Image } from 'react-native'
import React from 'react';

const Brandlist = () => {
    return (

        <View>
            <View style={styles.shorts}>
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
            </View>

            <View style={styles.shorts}>
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
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/bedthreads.jpg")}

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
                        Bed Threads
                    </Text>
                </View>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/adairs.png")}

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
                        Adairs
                    </Text>
                </View>   
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
        borderWidth: 2,
    },
    ImageText: {
        marginLeft: 10,
        width: 90,
        fontSize: 13,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",

    },
    shorts: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },


})

export default Brandlist;