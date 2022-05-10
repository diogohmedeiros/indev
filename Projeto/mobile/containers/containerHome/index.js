import * as React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../../pages/home';

export default function App(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}