import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from "../screens/NewScreen";
import OurSellers from '../screens/OurSellers';
import Brandlist from '../screens/Brandlist';
import MyCart from '../screens/MyCart';
import MyWishlist from '../screens/MyWishlist';
import Drawers from './Drawers';
import Tabs from './tabs';
import Profile from '../screens/profile';
import ChangePassword from '../screens/ChangePassword';
import Front from '../screens/Front';
import Login from '../screens/Login';
import Verify from '../screens/Verify';
import Registration1 from '../screens/Registration1';
import Registration2 from '../screens/Registration2';

const Stack = createNativeStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName='Homee'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#294b6f",
                },
                headerTitleStyle: {
                    color: "white",
                    fontSize: 20,
                },
                headerTintColor: "#ff8c00",
            }}>
            <Stack.Screen
                name='Homee'
                component={Tabs}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name='New'
                component={NewScreen}
                options={{
                    title: "Shop By Category"
                }}
            />
            <Stack.Screen
                name='Brand'
                component={Brandlist}
                options={{
                    title: "Brand List"
                }
                }
            />
            <Stack.Screen
                name='Our'
                component={OurSellers}
                options={{
                    title: "Our Sellers"
                }
                }
            />
            <Stack.Screen
                name='MyC'
                component={MyCart}
                options={{
                    title: "My Cart"
                }
                }
            />
            <Stack.Screen
                name='MyW'
                component={MyWishlist}
                options={{
                    title: "My Wishlist"
                }
                }
            />
            <Stack.Screen
                name='MyProf'
                component={Profile}
                options={{
                    title: "Profile"
                }
                }
            />
            <Stack.Screen
                name='Change'
                component={ChangePassword}
                options={{
                    title: "Change Password"
                }
                }
            />
            <Stack.Screen
                name='front'
                component={Login}
                options={{
                    title: "Change Password"
                }
                }
            />
            <Stack.Screen
                name='verify'
                component={Verify}
                options={{
                    title: "Change Password"
                }
                }
            />
            <Stack.Screen
                name='Reg1'
                component={Registration2}
                options={{
                    title: "Change Password"
                }
                }
            />
        </Stack.Navigator>

    )

}

export default Stacks;


