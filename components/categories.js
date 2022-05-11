import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <View>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "midnightblue",}}>Categories</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "midnightblue",}}>View All</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View >
                        <View style={{ ...styles.Border, borderRadius: 50 }}>
                            <Image
                                source={require("../assets/category/bed-sheets.png")}

                                //resizeMode="contain"
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
                            Bed Linen & Bedsheets
                        </Text>
                    </View>
                    <View>
                        <View style={{ ...styles.Border, borderRadius: 50 }}>
                            <Image
                                source={require("../assets/category/adornment.png")}

                                //resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginTop: 12,
                                    marginLeft: 11,
                                }}
                            />

                        </View>
                        <Text style={styles.ImageText}>
                            Carpet & Rugs
                        </Text>
                    </View>

                    <View>
                        <View style={{ ...styles.Border, borderRadius: 50 }}>
                            <Image
                                source={require("../assets/category/air-mattress.png")}

                                //resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginTop: 12,
                                    marginLeft: 11,
                                }}
                            />

                        </View>
                        <Text style={styles.ImageText}>
                            Mattresses
                        </Text>
                    </View>
                    <View>
                        <View style={{ ...styles.Border, borderRadius: 50 }}>
                            <Image
                                source={require("../assets/category/cushions.png")}

                                //resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginTop: 12,
                                    marginLeft: 11,
                                }}
                            />

                        </View>
                        <Text style={styles.ImageText}>
                            Cushions
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
        width: 100,
        fontSize: 13,
        textAlign: "center",
        justifyContent: "center",
        fontWeight:"bold" ,

    },

    shorts: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },

})

export default Categories;