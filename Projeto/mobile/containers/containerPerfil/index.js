import * as React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Perfil from '../../pages/perfil';

export default function App(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    )
}