import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import Drawers from './navigation/Drawers';
import Main from './navigation/Main';

const App = () => {
    return(
        
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
        
    )
}

export default App;
