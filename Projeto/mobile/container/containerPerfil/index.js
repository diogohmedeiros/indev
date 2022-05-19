import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Perfil from '../../pages/perfil';

export default function ContainerPerfil(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    )
}