import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style_detalhe.js'

import TabBar from '../components/tabBar/tabbar';

export default function Detalhe({ navigation, route }) {
    const { id_vaga } = route.params;
    const [vaga, setVaga] = useState("");
    const [encerra, setEncerra] = useState("");

    useEffect(() => {
        fetch('http://10.87.207.11:3000/buscar_vaga_id/' + id_vaga, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(resp => { return resp.json(); })
        .then(data => { 
            let dataatual = data.data_encerra_vaga.split("T");
            let dia = dataatual[0].split("-");
            dia = `${dia[2]}/${dia[1]}/${dia[0]}`;
            // let hora = dataatual[1].split(".")[0].substring(0, 5);
            setEncerra(dia);
            setVaga(data) 
        })
    }, []);


    return (
        <View style={style.container}>

            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.navigate("Vagas") }}>
                    <Image source={require('../../assets/app/voltarbranco.png')} 
                        style={{width: 45, height: 45, right:42}}
                        resizeMode="contain"/>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize:24, color: '#fff', right: 140}}>Cadastre-se</Text>
            </SafeAreaView>

            {/* corpo da vaga */}
            <ScrollView>
                <View style={style.corpo}>
                    
                    <Text style={{fontWeight: 'bold', fontSize: 27}}>{vaga.cargo}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 22}}>{vaga.nome_empresa}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: "#3D69FA", fontSize: 19, top: 1, fontWeight: 'bold'}}>{vaga.cidade}</Text>
                        <Text style={style.numvagas}>2 VAGAS</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{top: 10, fontWeight: 'bold', fontSize: 18}}>SALÁRIO:  </Text>
                        <Text style={{top: 10, fontWeight: 'bold', color: '#3D69FA', fontSize: 16}}>R$ {vaga.salario}</Text>
                    </View>
                    <Text style={{fontSize: 16, marginTop: 25 }}>{vaga.descricao}</Text>
                    
                    <View style={{marginTop: 25}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>EXPEDIENTE</Text>
                        <Text style={{fontSize: 16}}>{vaga.expediente}</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>REQUISITOS</Text>
                        <Text style={{fontSize: 16}}>{vaga.requisitos}</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>BENEFICIOS</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                {
                                    (vaga.beneficio === undefined) ? <Text>Não oferecemos benefícios.</Text>
                                    :
                                    vaga.beneficio.map((item, index) => {
                                        return(
                                            <Text style={{fontSize: 16,
                                                color: '#fff', 
                                                fontWeight: 'bold',
                                                padding: 3,
                                                width: 170,
                                                paddingLeft: 16,
                                                backgroundColor: '#3D69FA',
                                                borderRadius: 5,
                                                marginVertical: 3,
                                                }}>{item}
                                            </Text>
                                        )
                                    })
                                
                                }
                            </View>
                        </View>
                        
                    </View>
                    <View style={{marginTop: 35}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Até: {encerra}</Text>
                    </View>
                    
                </View>

                {/* botoes de se candidatar */}
                <View style={{flexDirection: 'row', width: '100%', height:40, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={style.button}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>CANDIDATAR-SE</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={[style.button, {flexDirection: 'row'}]}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>ENVIAR PDF</Text>
                        <Image source={require('../../assets/app/document.png')} style={{width: 20, height: 20, left: 9}}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{marginTop: 85}}></View>
            
            <View style={{marginTop: 36, position: 'absolute', bottom: 0}}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}