import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import style from './style.js';

import TabBar from '../components/tabBar';

export default function Vagas({ navigation }) {
    const [buscar, setBuscar] = useState("");

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                    style={{width: 30, height: 30, right: 22, top: -15}}
                    resizeMode="contain"/>
                </TouchableOpacity>
                <TextInput 
                    value={buscar} 
                    onChangeText={setBuscar} 
                    placeholderTextColor={"#ced4da"}
                    placeholder={"BUSCAR VAGAS..."}
                    style={style.search}
                    />
                <Image source={require('../../assets/app/search.png')} 
                    style={{width: 20, height: 20, left: 15, top: -15}} 
                    resizeMode="contain"/>
            </SafeAreaView>

            <View style={{width: "100%", flexDirection: 'row', justifyContent: 'center'}}>
                {/* filtros */}
                <TouchableOpacity style={{backgroundColor: '#EBEEF5', 
                                    width: 140, 
                                    flexDirection: 'row', 
                                    padding: 10, 
                                    borderRadius: 13, 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    right: 5,
                                    top: -20,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 2, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 10,  
                                    elevation: 10}}>
                    <Image source={require('../../assets/app/settingsfilter.png')}
                    style={{width: 25, height: 25, right: 10}} />
                    
                    <Text style={{paddingLeft: 5, fontWeight: 'bold'}}>FILTROS</Text>
                </TouchableOpacity>
                
                {/* todas as vagas */}
                <View style={{backgroundColor: '#EBEEF5', 
                                width: 210, 
                                flexDirection: 'row', 
                                padding: 10, 
                                borderRadius: 13, 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                left: 10, 
                                top: -20,
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 10,  
                                elevation: 10}}>

                </View>
            </View>

            <View style={{height: 30, justifyContent: 'center', top: -12}}>
                <Text style={{fontWeight: 'bold', left: 25}}>TODAS AS VAGAS</Text>
            </View>

            {/* cards de todas as vagas */}
            <View style={style.contvagas}>
                <View style={style.cards}>
                    <Text style={{fontWeight: 'bold', fontSize: 17.5}}>NOME DA VAGA</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 15.8}}>Empresa</Text>
                    <View style={style.row}>
                        <Text style={{color: "#3D69FA", fontSize: 17, top: 1}}>CIDADE - UF</Text>
                        <Text style={style.numvagas}>Nº VAGAS</Text>
                    </View>
                    <Text style={{fontSize: 15}}>Principais atividades do cargo. Blablablablablablablablablablablablablblabaalblalbalblablbalablablab</Text>
                    <View style={style.salario}>
                        <Text style={{top: 2, fontWeight: 'bold'}}>SALÁRIO: </Text>
                        <Text style={{top: 2, fontWeight: 'bold', color: '#3D69FA'}}>R$ 1000,00</Text>
                    </View>
                    <View style={style.abre}>
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', top: 5}}>ABRIR VAGA</Text>
                            <Image source={require('../../assets/app/seta-para-baixo.png')} style={{width: 25, height: 25, top: 3, left: 5}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                <TabBar navigation={navigation} />
        </View>
    )
}