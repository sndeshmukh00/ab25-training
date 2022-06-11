import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import Stack from './navigation/stacks'

const App = () => {
    return(
        
        <NavigationContainer>
            {/* <Tabs/> */}
            <Stack/>
        </NavigationContainer>
        
    )
}

export default App;
