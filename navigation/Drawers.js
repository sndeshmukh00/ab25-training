import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MyCart from '../screens/MyCart';
import MyWishlist from '../screens/MyWishlist';
import Brandlist from '../screens/Brandlist';
import NewScreen from '../screens/NewScreen'
import OurSellers from '../screens/OurSellers';
import Stacks from './stacks';
import Tabs from './tabs';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const Drawers = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={Tabs}  />
        </Drawer.Navigator>
    )
}

export default Drawers;