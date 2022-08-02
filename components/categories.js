import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../env';
import { FlatList } from 'react-native-gesture-handler';

const Categories = ({ navigation }) => {
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
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "midnightblue", }}>Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigation.navigate("New",token)}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: "midnightblue", }}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({ item }) => (

                    <View style={styles.index}>
                        <View style={{ ...styles.Border, borderRadius: 50 }}>
                            <Image
                                source={require("../assets/category/bed-sheets.png")}
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
        width: 90,
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
        flexDirection: "row",
    },

})

export default Categories;