import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { BASE_URL } from '../env';

const Profile = (user) => {
    const [userDetails,setUserDetails]= useState('');
    const [token,setToken]= useState('');
    // var flag = 0;
    // console.log(user)

    const getDetails = async()=>{
       
            setUserDetails(user.route.params)
            setToken(user.route.params.token)
        
    }
    

    useEffect(() => {
        
        getDetails();
      return () => {
        
      }
    }, [user])
    
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
                    <Text style={{ color: "#294b6f" }}> {userDetails.name} </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 100 }}> Email </Text>
                    <Text style={{ color: "#294b6f" }}> {userDetails.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ width: 100 }}> Mobile </Text>
                    <Text style={{ color: "#294b6f" }}> {userDetails.mobile} </Text>
                </View>
            </View>
            {/* <View style={styles.indexes}>
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
            </View> */}
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