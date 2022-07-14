import { StyleSheet, Text, Button, View, Image } from 'react-native'
import React from 'react';


const OurSellers = () => {
    return (
        <View>
            <View style={styles.shorts}>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/shop.png")}

                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                                tintColor: "chocolate"
                            }}
                        />

                    </View>
                    <Text numberOfLines={1}
                        ellipsizeMode="tail" style={styles.ImageText}>
                        Powell Hollow
                    </Text>
                </View>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/fish.png")}

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
                        Douglas Mitchell
                    </Text>
                </View>
            </View>
            <View style={styles.shorts}>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/coding.png")}

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
                        Shelton Gordon
                    </Text>
                </View>
                <View>
                    <View style={styles.Border}>
                        <Image
                            source={require("../assets/category/shop.png")}

                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 12,
                                marginLeft: 11,
                                tintColor: "chocolate",
                            }}
                        />

                    </View>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.ImageText}>
                        Test Series
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
        fontWeight: "bold"


    },
    shorts: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"

    },


})

export default OurSellers;