import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, TextInput, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style_login.js';

const image = {uri: "https://github.com/diogohmedeiros/indev/blob/main/Projeto/assets/banner-1.png?raw=true"}

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const [cadastro, setCadastro] = useState(false);

    useEffect(() => {
        checkUser();
    })

    const checkUser = async() => {
        let user = await AsyncStorage.getItem("userdata");
        if(user!=null) navigation.navigate("MainDrawer");
    }

    const autenticar = () => {
        let user = {
            email: email,
            senha: senha
        }

        fetch('http://10.87.207.11:3000/login_usuario', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { 
            if(!(resp.status == 404)){
                return resp.json();
            }
        })
        .then(data => {
            if(data != undefined){
                AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate("MainDrawer");
            }else{
                ToastAndroid.show('Email ou Senha Inválidos', ToastAndroid.SHORT);
            }
        })
    }

    const habilitarCadastro = () => {
        setCadastro(true);
    }

    const cadastrar = () => {
        let user = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
        }

        fetch("http://10.87.207.11:3000/cadastrar_usuario", {
            "method":"POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(user)
        })
        .then(resp => {
            if(!(resp.status == 404)){
                return resp.json();
            }})
        .then( data => {
            if(data == undefined) {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            } else {
                AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("MainDrawer");
            }
        });
    }

    return(
        <View style={style.container}>
            <ImageBackground source={image} resizeMode="cover" style={style.image} imageStyle={{opacity: 0.3}}>
                <View>
                <Image style={style.logo} source={require('../../assets/app/logo.png')} />
                <TextInput 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholderTextColor={'#ced4da'} 
                    placeholder={"Email"} 
                    style={style.textInput}
                />
                <TextInput 
                    value={senha} 
                    secureTextEntry={true} 
                    onChangeText={setSenha} 
                    placeholderTextColor={'#ced4da'} 
                    placeholder={"Senha"} 
                    style={style.textInput}
                />
        
                {
                    (cadastro) ?
                        <View>
                            <TextInput 
                                value={nome} 
                                onChangeText={setNome} 
                                placeholderTextColor={'#ced4da'} 
                                placeholder={"Nome Completo"} 
                                style={style.textInput}
                            />
                            <TextInput 
                                value={telefone} 
                                onChangeText={setTelefone}  
                                placeholderTextColor={'#ced4da'} 
                                placeholder={"Telefone"} 
                                style={style.textInput} 
                            />
                            <TouchableOpacity onPress={() => cadastrar() } style={[style.button, style.boxWithShadow]}>
                                <Text style={style.buttontext}>Cadastrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setCadastro(false)}}>
                                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18, top: 60, left: 130}}>Já tenho uma conta!</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={style.view}>
                            <TouchableOpacity onPress={() => autenticar() } style={[style.button, style.boxWithShadow]}>
                                <Text style={style.buttontext}>Entrar</Text>
                            </TouchableOpacity>

                            <View style={style.alignmargin}>
                                    <Text style={style.text}>Não tem uma conta?</Text>
                                <TouchableOpacity onPress={() => { habilitarCadastro() }}>
                                    <Text style={style.text2}>CADASTRE-SE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                </View>
            </ImageBackground>
        </View>
    )
}