import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const ChangePassword = ({ navigation }) => {
    return (
        <View styles={{ flex: 1 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10, }} > Create New Password</Text>
            <Text style={{ marginTop: 10, marginLeft: 9, }} >
                Your new password must be different from previous used passwords
            </Text>
            <View style={{ marginTop: 50, }}>
                <Text style={styles.texts}> Old Password </Text>
                <View style={styles.form}>
                    <TextInput placeholder=" " />
                </View>
                <Text style={styles.texts}> New Password </Text>
                <View style={styles.form}>
                    <TextInput placeholder=" " />
                </View>
                <Text style={styles.texts}> Confirm New Password </Text>
                <View style={styles.form}>
                    <TextInput placeholder=" " />
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("front")}>
                <View style={styles.button}>
                    <Text style={styles.text1}>Change Password</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginLeft: 15,
        width: "90%",
        height: 35,
        backgroundColor: "#d5e2f7",
        borderRadius: 5,
        marginTop: 8,
        borderRadius: 10,
    },
    texts: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 8,
        marginTop: 12,
    },
    text1: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
    },
    button: {
        height: 40,
        width: 310,
        backgroundColor: "#294b6f",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 35,
    },
})

export default ChangePassword;