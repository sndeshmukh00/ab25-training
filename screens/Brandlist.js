import { StyleSheet, Text, Button, View, Image } from 'react-native'
import React from 'react';

const Brandlist = () => {
    return (

        <View style={styles.container}>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/coyuchi.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </View>
                <Text numberOfLines={1}
                    ellipsizeMode="tail" style={styles.ImageText}>
                    Coyuchi
                </Text>
            </View>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/parachute.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
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
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/brooklinen.jpeg")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </View>
                <Text style={styles.ImageText}>
                    BrookLinen
                </Text>
            </View >            
                <View style={styles.shorts}>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/sheridan.webp")}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
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
                <View style={styles.shorts}>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/bedthreads.jpg")}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
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
                <View style={styles.shorts}>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/adairs.png")}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
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

    )
}

const styles = StyleSheet.create({
    Border: {
        height: 80,
        width: 80,
        borderColor: "#ff8c00",
        borderWidth: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 15,
    },
    ImageText: {
        width: 90,
        fontSize: 12,
        textAlign: "center",
        marginTop:5,
    },
    shorts: {
        margin: 10,
        alignItems: "center"
    },
})

export default Brandlist;