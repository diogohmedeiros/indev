import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView, ToastAndroid } from 'react-native';
import style from './style_configuracao.js'
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Configuracao({ navigation }) {
    const[foto, setFoto] = useState("");
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[telefone, setTelefone] = useState("");
    const[descricao, setDescricao] = useState("");
    const[cep, setCep] = useState("");

    const[selectedCivil, setSelectedCivil] = useState("");
    const[selectedSN, setSelectedSN] = useState("");


    const alterar = async () => {
        let alterar = {
            foto_usuario: foto,
            nome_usuario: nome,
            email: email,
            telefone: telefone,
            formacao: descricao,
            cep: cep
        }

        fetch('http://10.87.207.11:3000/atualizar_usuario', {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(alterar)
        })
        .then(resp => {
            if(resp.status == 200){

            }
        })
    }

    const selecionarimagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        })

        let item = result.uri.split(".")
        if (!result.cancelled) {
            setFoto(`data:image/${item[item.length-1]};base64,`+result.base64);
        }else if(!result.cancelled){
            ToastAndroid.show('Não foi possível selecionar uma foto', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.navigate("Perfil") }}>
                    <Image source={require('../../assets/app/voltarbranco.png')} 
                        style={{width: 40, height: 40, right: 40}}
                        resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 23, right: 135}}>Editar Perfil</Text>
            </SafeAreaView>

            {/* foto de perfil do usuário */}
            <ScrollView>
                <View style={style.fotonome}>
                    <Image source={(foto !== null) ? (foto) : require('../../assets/app/iconperfil.png')}
                        style={{width: 140, height: 140, borderRadius: 70, borderWidth: 3, borderColor: '#F8FAFF', margin: 18}}/>
                    <TouchableOpacity onPress={() => { selecionarimagem() }} style={style.trocarfoto} >
                        <Image source={require('../../assets/app/camera.png')} style={{width: 22, height: 22, left: 2}}/>
                        <Text style={{fontWeight: 'bold'}}>TROCAR FOTO</Text>
                    </TouchableOpacity>
                </View>

                {/* dados do usuário */}
                {/* nome do usuario */}
                <View style={{backgroundColor: '#fff', margin:20, marginTop:0}}>
                    <View style={style.campo}>
                        <Text style={style.textCampo}>NOME</Text>
                        <TextInput 
                            value={nome}
                            onChangeText={setNome} 
                            placeholderTextColor={'#000'} 
                            placeholder={"nome do usuario"}
                            style={{top: 5}}
                        />
                    </View>

                    {/* email do usuario */}
                    <View style={style.campo}>
                        <Text style={style.textCampo}>E-MAIL</Text>
                        <TextInput 
                            value={email}
                            onChangeText={setEmail} 
                            placeholderTextColor={'#000'} 
                            placeholder={"email do usuario"}
                            style={{top: 5}}
                        />
                    </View>

                    {/* telefone do usuario */}
                    <View style={style.campo}>
                        <Text style={style.textCampo}>TELEFONE</Text>
                        <TextInput 
                            value={telefone}
                            onChangeText={setTelefone} 
                            placeholderTextColor={'#000'} 
                            placeholder={"telefone do usuario"}
                            style={{top: 5}}
                        />
                    </View>

                    <TextInput 
                        value={descricao}
                        onChangeText={setDescricao} 
                        placeholderTextColor={'#000'} 
                        placeholder={"DESCRIÇÃO"}
                        multiline={true}
                        style={style.descricao}
                    />
                </View>

                <View style={{backgroundColor: "#EBEEF5", padding: 6, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>DADOS ADICIONAIS PARA CONTATO</Text>
                </View>

                {/* dados adicionais do usuario */}
                <View style={{margin:20, marginTop:0}}>

                    {/* estado civil do usuario */}
                    <View style={style.campo}>
                        <Text style={style.textCampo}>ESTADO CIVIL</Text>
                        <View style={style.viewpicker}>
                            <Picker 
                                selectedValue={selectedCivil}
                                onValueChange={(itemValue, itemIndex) => setSelectedCivil(itemValue)}
                            >
                                <Picker.Item label="Solteiro" value="solteiro"/>
                                <Picker.Item label="Casado" value="casado"/>
                                <Picker.Item label="Divorciado" value="divorciado"/>
                                <Picker.Item label="Viúvo" value="viuvo"/>
                            </Picker>
                        </View>
                    </View>

                    {/* pessoa com deficiencia */}
                    <View style={style.campo}>
                        <Text style={style.textCampo}>PESSOA COM DEFICIÊNCIA/PCD</Text>
                        <View style={style.viewpicker}>
                            <Picker 
                                selectedValue={selectedSN}
                                onValueChange={(itemValue, itemIndex) => setSelectedSN(itemValue)}
                            >
                                <Picker.Item label="Sim" value="sim"/>
                                <Picker.Item label="Não" value="nao"/>
                            </Picker>
                        </View>
                    </View>

                    {/* cep do usuario */}
                    <View style={style.campo}>
                        <Text style={style.textCampo}>CEP</Text>
                        <TextInput 
                            value={cep}
                            onChangeText={setCep} 
                            placeholderTextColor={'#000'} 
                            placeholder={"cep do usuario"}
                            style={{top: 5}}
                        />
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => { alterar(), navigation.navigate("Perfil") }} style={style.salvar}>
                        <Image source={require('../../assets/app/disk.png')} style={{width: 20, height: 20, right: 5}}/>
                        <Text style={{fontWeight:'bold', color:'#fff', left: 5}}>SALVAR DADOS</Text>
                    </TouchableOpacity>
                </View>

                <View style={{margin: 20}}></View>
            </ScrollView>
        </View>
    )
}