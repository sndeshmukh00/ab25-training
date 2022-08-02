import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key, value) => {
    try {
      var stringValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, stringValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(`${key}`)
      if(value !== null) {
        return JSON.parse(value);
        // console.log("token from asyncstarage==",value);
        // value previously stored
      }
    } catch(e) {
      // error reading value
      console.log(e);

    }
  }
  
  export const removeData = async (key) => {
    try {
      const value = await AsyncStorage.removeItem(`${key}`);
    } catch(e) {
      // error reading value
      console.log(e);

    }
  }
  