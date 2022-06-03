import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import style from './style_sobrenos.js';

import TabBar from '../components/tabBar/tabbar';

export default function SobreNos({ navigation }) {
    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                    style={{width: 30, height: 30, right: 45}}
                    resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, right: 150}}>Sobre Nós</Text>
            </SafeAreaView>

            <View style={{flex: 6, justifyContent: 'center'}}>

            </View>

            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}