import React, {useState, useMemo, useRef, useCallback, useEffect} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import style from './style_vagas.js';

import BottomSheet from '@gorhom/bottom-sheet';

import TabBar from '../components/tabBar/tabbar';

export default function Vagas({ navigation }) {
    const [buscar, setBuscar] = useState("");
    const [lista, setLista] = useState([]);
    const [posBS, setPosBS] = useState(0);
    const [selectedTurno, setSelectedTurno] = useState();
    const [selectedSalario, setSelectedSalario] = useState();

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['1%', '75%'], []);
    const handleSheetChanges = useCallback((index) => {
        setPosBS(index);
    }, []);

    useEffect(() => {
        fetch('http://10.87.207.11:3000/buscar_todas_vagas', {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(resp => { return resp.json(); })
        .then(data => { setLista(data) })
        .catch(err => {
        })
    }, [])

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

            {/* botão de filtros */}
            <View style={{width: "100%", flexDirection: 'row', justifyContent: 'center'}}>
                {/* filtros */}
                <TouchableOpacity 
                    onPress={()=> { 
                        (posBS == 0) ? setPosBS(1) : setPosBS(0);
                    }}
                style={{backgroundColor: '#EBEEF5', 
                                    width: 140, 
                                    flexDirection: 'row', 
                                    padding: 10, 
                                    borderRadius: 13,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    right: 100,
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
            </View>

            <View style={{height: 30, justifyContent: 'center', top: -12}}>
                <Text style={{fontWeight: 'bold', left: 25}}>TODAS AS VAGAS</Text>
            </View>

            {/* cards de todas as vagas */}
            <View style={style.contvagas}>
                {
                    lista.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={style.cards}>
                                <Text style={{fontWeight: 'bold', fontSize: 17.5}}>{item.cargo}</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15.8}}>{item.nome_empresa}</Text>
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
                            </TouchableOpacity>
                        )
                    })
                }
                


                {/* <View style={style.cards}>
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
                </View> */}
            </View> 

            <TabBar navigation={navigation} />
            {/* quando aperta o botão de filtros sobe o bottom sheet */}
            <BottomSheet
                ref={bottomSheetRef}
                index={posBS}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                style={{borderRadius: 20}}
            >
                <View style={style.contentContainer}>
                    <View style={{flexDirection: 'row', width: '90%', alignItems: 'center', padding: 7}}>
                        <Image source={require('../../assets/app/settingsfilter.png')} style={{width: 20, height: 20, right: 10}}/>
                        <Text style={{fontWeight: 'bold', alignItems: 'center', left: 7}}>FILTROS</Text>
                    </View>

                    {/* parte com os filtros */}
                    <View style={{width: '100%', height: '100%', margin: 5, alignItems: 'center'}}>
                        <TouchableOpacity style={style.filtros}>
                            <Text style={style.text_filtro}>VAGA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.filtros}>
                            <Text style={style.text_filtro}>CIDADE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.filtros}>
                            <Text style={style.text_filtro}>EMPRESA</Text>
                        </TouchableOpacity>

                        <View style={style.viewpicker}>
                            <Picker 
                                selectedValue={selectedTurno ?? "turno"}
                                onValueChange={(itemValue => 
                                    itemValue !== 'turno' && setSelectedTurno(itemValue))}
                                style={style.picker}
                            >
                                <Picker.Item label="TURNO" disabled={true} value="turno" style={{fontSize: 14.5}}/>
                                <Picker.Item label="1° turno" value="primeiro"/>
                                <Picker.Item label="2° turno" value="segundo"/>
                                <Picker.Item label="3° turno" value="terceiro"/>
                            </Picker>
                        </View>
                        
                        <View style={style.viewpicker}>
                            <Picker 
                                selectedValue={selectedSalario ?? "salario"}
                                onValueChange={(itemValue => 
                                    itemValue !== "salario" && setSelectedSalario(itemValue))}
                                style={style.picker}
                            >
                                <Picker.Item label="SALÁRIO" disabled={true} value="salario" style={{fontSize: 14.5}}/>
                                <Picker.Item label="Até 1.000" value="mil"/>
                                <Picker.Item label="De 1.000 a 2.000" value="mildoismil"/>
                                <Picker.Item label="De 2.000 a 3.000" value="doismiltres"/>
                                <Picker.Item label="De 3.000 a 4.000" value="tresmilquatro"/>
                                <Picker.Item label="De 4.000 a 5.000" value="quatromilcinco"/>
                                <Picker.Item label="Mais de 5.000" value="cincomilmais"/>
                            </Picker>
                        </View>

                        <TouchableOpacity style={style.buttonfiltro}>
                            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 16,}}>Filtrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>

            
        </View>
        
    )
}