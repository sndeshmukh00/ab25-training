import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../env';
import { FlatList } from 'react-native-gesture-handler';


const Bestsellers = ({ navigation }) => {
    const [token, setToken] = useState("")
    const [data, setData] = useState("")
    const getCategories = async () => {
        fetch(`${BASE_URL}v1/user/get-categories`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(res => {
                setData(res.data)
            })
    }
    useEffect(() => {
        setToken(navigation.token)
        getCategories();
        return () => {

        }
    }, [])
    // console.log(navigation.token)
    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "midnightblue", }}>Best Sellers</Text>
                <TouchableOpacity onPress={() => navigation.navigation.navigate("New")}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: "midnightblue" }}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", margin: 10, }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.index}>
                            <View style={styles.Border}>
                                <Image
                                    source={require("../assets/category/bed-sheets.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 50,
                                        height: 50,
                                    }}
                                />
                            </View>
                            <Text numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.ImageText}>
                                {item.name}
                            </Text>
                        </View>)}
                />
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
        width: 100,
        fontSize: 13,
        textAlign: "center",
        marginTop: 5,
    },
    index: {
        margin: 5,
        alignItems: "center",
    },
    shorts: {
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },


})

export default Bestsellers;
