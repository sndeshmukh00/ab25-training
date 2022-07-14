import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header'
import Categories from '../components/categories'
import Arrival from '../components/arrival'
import Latest from '../components/latest'
import Bestsellers from '../components/bestsellers'
import Sellers from '../components/sellers'
import Brands from '../components/brands'




const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />
            <ScrollView>
                <Categories navigation={navigation} />
                <Arrival />
                <Latest />
                <Bestsellers navigation={navigation} />
                <Sellers navigation={navigation} />
                <Brands navigation={navigation} />
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