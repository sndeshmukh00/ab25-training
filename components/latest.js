import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Latest = () => {
    return (
        <View>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "#294b6f", }}>Latest Products</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "#294b6f", }}>View All</Text>
            </View>
            <View style={{ ...styles.shorts, margin: 10, marginVertical: 22, }}>
                <View style={styles.content}>
                    <View style={styles.create} >
                        <Image
                            source={require("../assets/category/cash-on-delivery.png")}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,

                            }}
                        />

                    </View>
                    <Text style={styles.texts}>Cash On Delivery</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.create} >
                        <Image
                            source={require("../assets/category/pie-chart.png")}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,

                            }}
                        />

                    </View>
                    <Text style={styles.texts}>High Retail Margins</Text>
                </View><View style={styles.content}>
                    <View style={styles.create} >
                        <Image
                            source={require("../assets/category/price-tag.png")}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,

                            }}
                        />

                    </View>
                    <Text style={styles.texts}>Lowest Price</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    create: {
        height: 35,
        width: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,

    },
    content: {
        height: 55,
        width: 120,
        backgroundColor: "gainsboro",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",

    },
    shorts: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },
    texts: {
        color: "midnightblue",
        fontWeight: "bold",
        fontSize: 10,
        width: 50,
        marginLeft: 5,
    },
})

export default Latest;