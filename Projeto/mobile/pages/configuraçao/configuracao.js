import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import style from './style_configuracao.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Configuracao({ navigation }) {
    const[foto, setFoto] = useState(null);

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                        style={{width: 30, height: 30, right: 40}}
                        resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 23, right: 135}}>Editar Perfil</Text>
            </SafeAreaView>

            {/* foto de perfil do usuário */}
            <View style={style.fotonome}>
                <Image source={(foto !== null) ? (foto) : require('../../assets/app/iconperfil.png')}
                      style={{width: 140, height: 140, borderRadius: 70, borderWidth: 3, borderColor: '#e5e5e5', margin: 18}}/>
                <TouchableOpacity style={style.trocarfoto} >
                    <Image source={require('../../assets/app/camera.png')} style={{width: 22, height: 22, left: 2}}/>
                    <Text style={{fontWeight: 'bold'}}>TROCAR FOTO</Text>
                </TouchableOpacity>
            </View>

            {/* dados do usuário */}
            <View style={{backgroundColor: '#fff'}}>

            </View>
        </View>
    )
}