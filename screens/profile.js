import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.index}>
                <View style={styles.dark}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft: 7, }}>
                        User Detail
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 8 }}>
                    <Text style={{ width: 100 }}> Name </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 100 }}> Email </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu11@gmail.com </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 100 }}> Mobile </Text>
                    <Text style={{ color: "#294b6f" }}> 7898935434 </Text>
                </View>
            </View>
            <View style={styles.indexes}>
                <View style={styles.dark}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft: 7, }}>
                        Company Detail
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 8 }}>
                    <Text style={{ width: 160 }}> Company Name </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 160 }}> Representative Name </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 160 }}> Company Email </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 160 }}> Name </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 160 }}> Name </Text>
                    <Text style={{ color: "#294b6f" }}> Dezavu </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 13,
    },
    index: {
        height: 110,
        width: "90%",
        borderWidth: 1,
        borderColor: "#ff8c00",
        borderRadius: 8,
    },
    indexes: {
        height: 160,
        width: "90%",
        borderWidth: 1,
        borderColor: "#ff8c00",
        borderRadius: 8,
        marginTop:20,
    },
    dark: {
        height: 27,
        width: "100%",
        backgroundColor: "#ff8c00",
        justifyContent: "center",
    }
})

export default Profile;