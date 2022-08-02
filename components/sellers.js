import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Sellers = ({ navigation }) => {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "midnightblue", marginVertical: 15, }}>Trending Products</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: "midnightblue", marginVertical: 15, }}>View All</Text>
            </View>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "midnightblue", }}>Sellers</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Our")}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: "midnightblue" }}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.index}>
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
                    <View style={styles.index}>
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
                    <View style={styles.index}>
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
                    <View style={styles.index}>
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
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Border: {
        height: 80,
        width: 80,
        borderColor: "#ff8c00",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    ImageText: {
        width: 90,
        fontSize: 13,
        textAlign: "center",
        marginTop:5,
    },
    index: {
        margin: 5,
        alignItems: "center",
    },
    shorts: {
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
})

export default Sellers;