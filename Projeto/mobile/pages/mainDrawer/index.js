import React from 'react';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Contato from '../contato';
import SobreNos from '../sobreNos';

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
            <Drawer.Screen name="Contato" component={Contato}/>
            <Drawer.Screen name="Sobre Nós" component={SobreNos}/>
        </Drawer.Navigator>
  );
}
