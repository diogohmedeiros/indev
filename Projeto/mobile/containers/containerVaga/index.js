import * as React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Vagas from '../../pages/vagas';

export default function App(){
    return (
        <Stack.Navigator screenOptions ={{
            headerShown: false
        }}>
            <Stack.Screen name="Vagas" component={Vagas} />
        </Stack.Navigator>
    )
}