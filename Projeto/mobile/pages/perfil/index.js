import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground} from 'react-native';
import style from './style.js';

import TabBar from '../components/tabBar';

const image = require('../../assets/app/predio.png')

export default function Perfil({ navigation }) {
    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <ImageBackground source={image} resizeMode="cover" style={style.imgbgd}>
                    <View style={style.avatar}>

                    </View>
                    <Text style={style.nomeUser}>NOME DO USUARIO</Text>
                </ImageBackground>
            </SafeAreaView>

            {/* container de informações do usuario */}
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEEF5'}}>
                <View style={style.containerInfo}>
                    <TouchableOpacity style={style.configurar}>
                        <Image source={require('../../assets/app/edit.png')} style={{width: 20, height: 20}}/>
                        <Text style={{fontWeight: 'bold', right: 10}}>CONFIGURAR PERFIL</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* parte footer */}
            <View>
                <TabBar navigation={navigation} />
            </View>
        </View>
        
    )
}