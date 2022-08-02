import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../env';

const Brands = ({ navigation }) => {
    const [token, setToken] = useState("")
    const [data, setData] = useState("")
    const getBrands = async () => {
        fetch(`${BASE_URL}v1/user/get-brands`, {
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
        getBrands();
        return () => {

        }
    }, [])
    // console.log(navigation.token)
    return (
        <View style={{ marginVertical: 15, }}>
            <View style={styles.shorts}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: "midnightblue", }}>Brands</Text>
                <TouchableOpacity onPress={() => navigation.navigation.navigate("Brand")}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10, color: "midnightblue", }}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
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
                                    source={require("../assets/category/coyuchi.png")}
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
                                {item.title}
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
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },


})

export default Brands;