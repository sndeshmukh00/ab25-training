import { StyleSheet, View, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import Header from '../components/header'
import Categories from '../components/categories'
import Arrival from '../components/arrival'
import Latest from '../components/latest'
import Bestsellers from '../components/bestsellers'
import Sellers from '../components/sellers'
import Brands from '../components/brands'
import { getData } from '../asyncstorage'



const HomeScreen = ({ navigation }) => {
    // console.log("naviag  ==> ",login);÷
    
     const [token,setToken] = useState("") ;
    const temp = async()=>{
        var a = await getData('token');
        //const temp = JSON.stringify(token);
        setToken(a)
        // console.log("token fromm home == ",a);
    }
    // var tee = JSON.parse(token)
    useEffect(() => {
      temp()
    
      return () => {
        
      }
    }, [])
    
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />
            <ScrollView>
                <Categories navigation={{navigation,token}} />
                <Arrival />
                <Latest />
                <Bestsellers navigation={{navigation,token}} />
                <Sellers navigation={navigation} />
                <Brands navigation={{navigation,token}} />
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HomeScreen;