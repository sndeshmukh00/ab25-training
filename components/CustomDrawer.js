import { StyleSheet, Text, View, Image } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getData, removeData } from '../asyncstorage';


const CustomDrawer = (props) => {
  const [user,setUser] = useState("") ;
    const temp = async()=>{
        var a = await getData('user');
        // const temp = JSON.parse(a);
        setUser(a);

        // console.log("token fromm drawerhkhfutdyr == ",user.name);
    }
    const logout = async() => {
      await removeData('token')
      await removeData('user')
      props.navigation.navigate("front")
    }
    // var tee = JSON.parse(token)
    useEffect(() => {
      temp()
    
      return () => {
        
      }
    }, [])
  return (
    <View style={{ flex: 1, }}>
      <DrawerContentScrollView {...props} contentContainerStyle={
        { backgroundColor: "#ff8c00" }} >
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.Border}>
              <Image
                source={require("../assets/icons/man.png")}
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 30,
                }}
              />
            </View>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <View style={styles.Arrow}>
                <Image
                  source={require("../assets/icons/arrow.png")}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: "#ff8c00",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.index}>
            { user.name ? <>
              <Text style={{ color: "#fff" }}> {user.name} </Text>
            <Text style={{ color: "#294b6f" }}> {user.mobile}</Text></>:<></>}
            
          </View>
        </View>

        <View style={{ backgroundColor: "#294b6f", flex: 1, }}>
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/home.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Home"

            onPress={() => props.navigation.navigate("Homeee")}
          />
          <DrawerItem
            icon={() =>
              <View style={[styles.Arrows, { flexDirection: "row" }]} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/shopping-cart.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="My Cart"

            onPress={() => props.navigation.navigate("MyC")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/clipboard.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="My Orders"
            onPress={() => props.navigation.navigate("My Orders")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/heart.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="My WishList"
            onPress={() => props.navigation.navigate("MyW")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/more.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Shop By Category"
            onPress={() => props.navigation.navigate("New")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/users.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Our Sellers"
            onPress={() => props.navigation.navigate("Our")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/more.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Browse Brands"
            onPress={() => props.navigation.navigate("Brand")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/shield.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Privacy Policy"
            onPress={() => props.navigation.navigate("MyC")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/file.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Terms & Conditions"
            onPress={() => props.navigation.navigate("MyC")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/info.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="About Us"
            onPress={() => props.navigation.navigate("MyC")}
          />
          <DrawerItem
            icon={() =>
              <View style={styles.Arrows} >
                <Image
                  style={styles.Images}
                  source={require('../assets/icons/logout.png')}
                />
              </View>
            }
            labelStyle={{
              color: "#ff8c00",
              marginLeft: -20,
            }}
            label="Log Out"
            onPress={() => logout()}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{ height: 40, width: "100%", flexDirection: "row", paddingTop: 20, marginLeft: 50, }}>
        <Text style={{ color : "#ff8c00", fontWeight: "bold" }}>BULK</Text>
        <Text style={{ fontWeight: "bold", color: "#294b6f" }}>BAZAAR </Text>
        <Text style={{ color : "#ff8c00", fontWeight: "bold" }}>V1.0.0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Border: {
    height: 90,
    width: 90,
    margin: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
  },
  Arrow: {
    height: 40,
    width: 40,
    margin: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  Arrows: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#ff8c00",
    justifyContent: "center",
    alignItems: "center",
  },
  index: {
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: -10,
  },
  Images: {
    alignItems: "center",
    justifyContent: 'center',
    width: 16,
    height: 14,
    tintColor: "#fff",
  },
  Images1: {
    alignItems: "center",
    justifyContent: 'center',
    width: 16,
    height: 14,
    tintColor: "#fff",
    //marginLeft:10
  },
})


export default CustomDrawer;