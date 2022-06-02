import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';

import Contato from '../contato/contato';
import SobreNos from '../sobreNos/sobrenos';
import Home from '../home/home';
import Vagas from '../vagas/vagas';
import Anunciar from '../anunciar/anunciar';
import Perfil from '../perfil/perfil';
import Configuracao from '../configuraçao/configuracao';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {

  const[foto, setFoto] = useState(null);
  const[nome, setNome] = useState(null);
  const[perfil, setPerfil] = useState("");

  useEffect(() => {
    const _retrieveDrawer = async () => {
      try {
        const data = await AsyncStorage.getItem('userdata');
        if(data != undefined) {
          let obj = JSON.parse(data);
          setFoto({uri:obj.foto});
          setNome(obj.nome);
          console.log(foto);
        }
      } catch (error) {
      }
    };
    _retrieveDrawer();
  }, []);

  useEffect(() => { 
    loadData(); 
  })

  const loadData = async () => {
    let id = JSON.parse(await AsyncStorage.getItem('userdata')).id_usuario;
    fetch('http://10.87.207.11:3000/buscar_usuario_id/' + id)
    .then(resp => { return resp.json(); })
    .then(data => { setPerfil(data[0]); })
}


  return (
        <Drawer.Navigator screenOptions={{ headerShown: false , 
          drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
          },}} 
          drawerContent={props => {
            return (
              <DrawerContentScrollView {...props}>
                <View style={{alignItems: 'center', padding: 30}}>
                    <Image source={(foto !== null) ? (foto) : require('../../assets/app/iconperfil.png')}
                      style={{width: 80, height: 80, borderRadius: 60, borderWidth: 3, borderColor: '#e5e5e5'}}/>
                    <Text style={{fontWeight: 'bold', fontSize: 17, top: 10}}>{perfil.nome_usuario}</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem labelStyle={{color:'black' ,fontWeight: 'bold'}} label="Sair" onPress={async () => {
                    await AsyncStorage.removeItem('userdata');
                    props.navigation.navigate("Login");
                }}/>
              </DrawerContentScrollView>
            )
          }}>
            <Drawer.Screen name="Home" component={Home} 
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Vagas" component={Vagas} 
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Anunciar" component={Anunciar} 
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Perfil" component={Perfil} 
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Contato" component={Contato}
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Sobre Nós" component={SobreNos}
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Configuracao" component={Configuracao}
                options={{
                  drawerLabelStyle: {color:'black', fontWeight: 'bold'}
                }}
            />
        </Drawer.Navigator>
  );
}
