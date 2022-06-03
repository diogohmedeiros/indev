import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import style from './style.js'

import TabBar from '../components/tabBar';

export default function Anunciar({ navigation }) {
    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                    style={{width: 30, height: 30, right: 60}}
                    resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 19, right: 40}}>ANUNCIE SUA VAGA AQUI</Text>
            </SafeAreaView>

            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>

            </View>

            {/* parte footer */}
            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}