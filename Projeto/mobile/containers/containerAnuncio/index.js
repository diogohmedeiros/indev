import * as React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Anunciar from '../../pages/anunciar';

export default function App(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Anunciar" component={Anunciar} />
        </Stack.Navigator>
    )
}