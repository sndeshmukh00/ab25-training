import { StyleSheet, Text, Button, View, Image } from 'react-native'
import React from 'react';


const OurSellers = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/shop.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            tintColor: "chocolate"
                        }}
                    />
                </View>
                <Text numberOfLines={1}
                    ellipsizeMode="tail" style={styles.ImageText}>
                    Powell Hollow
                </Text>
            </View>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/fish.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,                    
                        }}
                    />
                </View>
                <Text numberOfLines={1}
                    ellipsizeMode="tail" style={styles.ImageText}>
                    Douglas Mitchell
                </Text>
            </View>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/coding.png")}
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
                    Shelton Gordon
                </Text>
            </View>
            <View style={styles.shorts}>
                <View style={styles.Border}>
                    <Image
                        source={require("../assets/category/shop.png")}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,                            
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
    )
}

const styles = StyleSheet.create({

    Border: {
        height: 80,
        width: 80,
        borderColor: "#ff8c00",
        borderWidth: 1,
        borderRadius:10,
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

export default OurSellers;