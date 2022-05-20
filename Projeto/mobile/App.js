import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import MainDrawer from './pages/mainDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}