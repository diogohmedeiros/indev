import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import style from './style_perfil.js';

import TabBar from '../components/tabBar/tabbar';

const image = require('../../assets/app/predio.png')

export default function Perfil({ navigation }) {
    const[perfil, setPerfil] = useState("");

    // useFocusEffect(
    //     React.useCallback(async () => {
    //         async function fetchData() {
    //             let id = JSON.parse(await AsyncStorage.getItem('userdata')).id_usuario;
    //             fetch('http://10.87.207.11:3000/buscar_usuario_id/' + id)
    //             .then(resp => { return resp.json(); })
    //             .then(data => { setPerfil(data[0]); })
    //         }
    //         fetchData();
    //         return;
    //     }, [])
    // )

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        let id = JSON.parse(await AsyncStorage.getItem('userdata')).id_usuario;
        fetch('http://10.87.207.11:3000/buscar_usuario_id/' + id)
        .then(resp => { return resp.json(); })
        .then(data => { setPerfil(data[0]); })
    }

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <ImageBackground source={image} resizeMode="cover" style={style.imgbgd}>
                    <View style={style.avatar}>

                    </View>
                    <Text style={style.nomeUser}>{perfil.nome_usuario}</Text>
                </ImageBackground>
            </SafeAreaView>

            {/* container de informações do usuario */}
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEEF5'}}>
                <View style={style.containerInfo}>
                    <TouchableOpacity style={style.configurar} onPress={() => navigation.navigate("Configuracao")}>
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