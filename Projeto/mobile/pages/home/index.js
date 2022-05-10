import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import style from './style.js';

export default function Home({ navigation }) {
    const [buscar, setBuscar] = useState("");

    return (
        <View style={style.container}>
            <SafeAreaView style={style.header}>
                <TouchableOpacity>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                    style={{width: 30, height: 30, right: 12}}
                    resizeMode="contain"/>
                </TouchableOpacity>
                <TextInput 
                    value={buscar} 
                    onChangeText={setBuscar} 
                    placeholderTextColor={"#ced4da"}
                    placeholder={"BUSCAR VAGAS..."}
                    style={style.search}/>
            </SafeAreaView>
        </View>
    )
}