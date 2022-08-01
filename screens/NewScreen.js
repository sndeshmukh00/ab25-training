import { StyleSheet, Text, Button, View, Image,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react';
import { BASE_URL } from '../env';

const NewScreen = (tokens) => {
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
        setToken(tokens)
        getCategories();
        return () => {

        }
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                    //horizontal={true}
                   // showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({ item }) => (
            <View style={styles.shorts}>
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
                <Text
                    style={styles.ImageText}>
                    {item.name}
                </Text>
            </View>)}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 15,
    },
    Border: {
        height: 80,
        width: 80,
        borderColor: "#ff8c00",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    ImageText: {
        width: 100,
        fontSize: 12,
        textAlign: "center",
        marginTop:5,
    },

    shorts: {
        margin: 10,
        alignItems: "center"
    },

})
export default NewScreen;