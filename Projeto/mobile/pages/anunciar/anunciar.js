import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style_anunciar.js'

import TabBar from '../components/tabBar/tabbar';

const image = require('../../assets/app/anunciar-login.png');

export default function Anunciar({ navigation }) {
    return (
        <View style={style.container}>
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground source={image} resizeMode="cover" style={{width: 425, height: 830, alignItems: 'center', top: 30}}>
                    <View>
                        <Image source={require('../../assets/app/homem_megafone.png')} style={{top: 100, right: 20}}/>
                        <Text style={{fontWeight: 'bold', fontSize: 16.5, top: 110}}>VOCÊ NÃO TEM ACESSO</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, top: 210}}>Para anunciar a sua vaga é preciso</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16, top: 215}}>fazer o LOGIN EMPRESA</Text>

                    <TouchableOpacity style={style.logempresa} onPress={async () => {
                        await AsyncStorage.removeItem('userdata');
                        navigation.navigate("Login");
                    }}>
                        <Text style={style.text_logempresa}>LOGIN EMPRESA</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* parte footer */}
            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}