import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../../pages/home';
import MainDrawer from '../../pages/mainDrawer';

export default function ContainerHome(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MainDrawer" component={MainDrawer} />
        </Stack.Navigator>
    )
}