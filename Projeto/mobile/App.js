import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import MainDrawer from './pages/mainDrawer';
import TabBar from './pages/components/tabBar';
import Home from './pages/home/index';
import Vagas from './pages/vagas/index';
import Anunciar from './pages/anunciar/index';
import Perfil from './pages/perfil/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vagas" component={Vagas} />
        <Stack.Screen name="Anunciar" component={Anunciar} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}