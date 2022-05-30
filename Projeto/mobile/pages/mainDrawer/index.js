import React from 'react';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Contato from '../contato';
import SobreNos from '../sobreNos';
import Home from '../home/index';
import Vagas from '../vagas/index';
import Anunciar from '../anunciar/index';
import Perfil from '../perfil/index';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
        <Drawer.Navigator screenOptions={{ headerShown: false , 
          drawerStyle: {
          backgroundColor: '#e5e5e5',
          width: 250,
          },}} 
          drawerContent={props => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
            )
          }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Vagas" component={Vagas} />
            <Drawer.Screen name="Anunciar" component={Anunciar} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Contato" component={Contato}/>
            <Drawer.Screen name="Sobre Nós" component={SobreNos}/>
        </Drawer.Navigator>
  );
}
