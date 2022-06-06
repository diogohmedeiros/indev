import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground} from 'react-native';
import style from './style_detalhe.js'


export default function Detalhe({ navigation, route }) {
    const { id } = route.params;
    const [vaga, setVaga] = useState("");

    useEffect(() => {
        fetch('http://10.87.207.11:3000/buscar_vaga_id/' + id, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(resp => { return resp.json(); })
        .then(data => { setVaga(data) })
        .catch(err => {
        })
    }, []);

    return (
        <View style={style.container}>

            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.navigate("Vagas") }}>
                    <Image source={require('../../assets/app/voltarbranco.png')} 
                        style={{width: 45, height: 45, right: 30}}
                        resizeMode="contain"/>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize:24, color: '#fff', right: 120}}>Cadastre-se</Text>
            </SafeAreaView>

            {/* corpo da vaga */}
            <View style={style.corpo}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>CARGO</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>EMPRESA</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: "#3D69FA", fontSize: 17, top: 1, fontWeight: 'bold'}}>CIDADE</Text>
                    <Text style={style.numvagas}>N° VAGAS</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{top: 10, fontWeight: 'bold', fontSize: 15}}>SALÁRIO:    </Text>
                    <Text style={{top: 10, fontWeight: 'bold', color: '#3D69FA'}}>R$ ----,--</Text>
                </View>
                <Text style={{fontSize: 14.5, marginTop: 25 }}>DESCRICAO</Text>
                
                <View style={{marginTop: 25}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>EXPEDIENTE</Text>
                    <Text>----- hora do expediente -------</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>REQUISITOS</Text>
                    <Text>----- requisitos do expediente ------</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>BENEFICIOS</Text>
                    <Text>vale alimentaçao</Text>
                </View>
            </View>

            {/* botoes de se candidatar */}
            <View style={{flexDirection: 'row', width: '100%', height:40, borderWidth:1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{marginRight: 50}}>
                    <Text>CANDIDATAR-SE</Text>
                </TouchableOpacity>
    
                <TouchableOpacity sytle={{}}>
                    <Text>ENVIAR PDF</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}