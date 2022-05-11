import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from 'react-native'

import React from 'react'
import Header  from '../components/header'
import Categories from '../components/categories'
import Arrival from '../components/arrival'
import Latest from '../components/latest'
import Bestsellers from '../components/bestsellers'
import Sellers from '../components/sellers'
import Brands from '../components/brands'


const HomeScreen = () => {
    return (
        <View style={styles.container}>
           
                <Header />
                <ScrollView>
                <Categories/>
                <Arrival/>
                <Latest/>
                <Bestsellers/>
                <Sellers/>
                <Brands/>
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