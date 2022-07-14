import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const Sellers = ({navigation}) => {
    return (
        <View style={{marginVertical:15,}}>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "midnightblue", marginVertical:15,}}>Trending Products</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "midnightblue",marginVertical:15, }}>View All</Text>
            </View>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "midnightblue", }}>Sellers</Text>
                <TouchableOpacity onPress = { () => navigation.navigate("Our")}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "midnightblue", }}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                                tintColor:"chocolate"
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
                                tintColor:"chocolate",
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
        fontWeight:"bold"


    },
    shorts: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },


})

export default Sellers;