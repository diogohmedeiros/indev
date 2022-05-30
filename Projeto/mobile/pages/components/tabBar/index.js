import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import style from './style.js'

export default function TabBar ({ navigation }) {
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <Image source={require('../../../assets/app/home.png')} style={{width: 25, height: 25, right: 75}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Vagas")}}>
                <Image source={require('../../../assets/app/maleta.png')} style={{width: 25, height: 25, right: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Anunciar")}} >
                <Image source={require('../../../assets/app/megaphone.png')} style={{width: 26.5, height: 26.5, left: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Perfil")}}>
                <Image source={require('../../../assets/app/person.png')} style={{width: 25, height: 25, left: 70}}/>
            </TouchableOpacity>
        </View>
    )
}