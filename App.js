import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import Stacks from './navigation/stacks';
import Drawers from './navigation/Drawers';

const App = () => {
    return(
        
        <NavigationContainer>
             {/* <Tabs/>   */}
            {/* <Stacks/> */}
            <Drawers/>
        </NavigationContainer>
        
    )
}

export default App;
