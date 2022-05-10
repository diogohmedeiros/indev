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
                    style={{width: 30, height: 30, right: 12, top: -15}}
                    resizeMode="contain"/>
                </TouchableOpacity>
                <TextInput 
                    value={buscar} 
                    onChangeText={setBuscar} 
                    placeholderTextColor={"#ced4da"}
                    placeholder={"BUSCAR VAGAS..."}
                    style={style.search}
                    />
            </SafeAreaView>
            <View style={{width: "100%", flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{backgroundColor: '#EBEEF5', 
                                width: 140, 
                                flexDirection: 'row', 
                                padding: 10, 
                                borderRadius: 13, 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                right: 5,
                                top: -20}}>
                    <Image source={require('../../assets/app/settingsfilter.png')}
                    style={{width: 25, height: 25, right: 10}} />
                    <Text style={{paddingLeft: 5, fontWeight: 'bold'}}>FILTROS</Text>
                </View>
                <View style={{backgroundColor: '#EBEEF5', 
                                width: 210, 
                                flexDirection: 'row', 
                                padding: 10, 
                                borderRadius: 13, 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                left: 10, 
                                top: -20}}>

                </View>
            </View>
        </View>
    )
}