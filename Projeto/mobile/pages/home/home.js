import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from '@react-navigation/drawer';
import style from './style_home.js';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import TabBar from '../components/tabBar/tabbar';

const image = require('../../assets/app/predio.png')

export default function Home({ navigation }) {
    const [perfil, setPerfil] = useState("");
    const [buscar, setBuscar] = useState("");

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        let id = JSON.parse(await AsyncStorage.getItem('userdata')).id_usuario;
        fetch('http://10.87.207.11:3000/buscar_usuario_id/' + id)
        .then(resp => { return resp.json(); })
        .then(data => { setPerfil(data[0]); })
    }

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                    style={{width: 30, height: 30, right: 22}}
                    resizeMode="contain"/>
                </TouchableOpacity>

                <TextInput 
                    value={buscar} 
                    onChangeText={setBuscar} 
                    placeholderTextColor={"#ced4da"}
                    placeholder={"BUSCAR VAGAS..."}
                    style={style.search}/>
                <Image source={require('../../assets/app/search.png')} 
                    style={{width: 20, height: 20, left: 15}} 
                    resizeMode="contain"/>
            </SafeAreaView>

            {/* parte de procura de vagas especificas */}
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
                {/* botao para anunciar uma vaga */}
                <View style={style.anuncie}>
                    <ImageBackground source={image} resizeMode="cover" style={style.imgbgd}>
                        <View style={{width: 170}}>
                            <Text style={style.title}>ANUNCIE A SUA</Text>
                            <Text style={style.title}>VAGA NA INDEV</Text>
                        </View>

                        <View style={{width: 270, top: 10}}>
                            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 15, right: 230}}>ALCANCE OS MELHORES TALENTOS</Text>
                        </View>

                        <TouchableOpacity onPress={() => {navigation.navigate("Anunciar")} }style={style.btnAnuncio}>
                            <Text style={{fontWeight: 'bold', color: '#fff'}}>ANUNCIE AGORA</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                
                <Text style={{fontWeight: 'bold', fontSize:21, top: -15, right: 50}}>Olá, {perfil.nome_usuario}!</Text>

                {/* tres quadradinhos de vagas */}
                <View style={style.vagasProc}>
                    <View style={style.cards}>
                        <TouchableOpacity style={style.cardButton}>
                            <Image source={require('../../assets/app/cadeirante.png')} style={{width: 27, height: 27}}/>
                            <Text style={{fontSize: 16, fontWeight: 'bold', top: 10}}>VAGAS PARA PCD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.cardButton}>
                            <Image source={require('../../assets/app/graduacao.png')} style={{width: 26, height: 28}}/>
                            <Text style={{fontSize: 16, fontWeight: 'bold', top: 10}}>VAGAS DE ESTÁGIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.cardButton}>
                            <Image source={require('../../assets/app/mouse.png')} style={{width: 26, height: 28, top: -8}}/>
                            <Text style={{fontSize: 16, fontWeight: 'bold', top: 10}}>VAGAS DE TI</Text>   
                        </TouchableOpacity>
                    </View>
                </View>

                {/* quatro quadradinhos de vagas de áreas específicas */}
                <View style={style.four}>
                    <View style={style.doisprimeiro}>
                        <TouchableOpacity style={[style.buttonarea, {backgroundColor: '#040837'}]}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Tecnologia da Informação</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.buttonarea, {backgroundColor: '#fff', borderColor: '#3757BE', marginLeft: 10}]}>
                            <Text style={{color: '#3757BE', fontWeight: 'bold'}}>Assistente Administrativo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.doisultimo}>
                        <TouchableOpacity style={[style.buttonarea, {backgroundColor: '#fff', borderColor: '#3757BE'}]}>
                            <Text style={{color: '#3757BE', fontWeight: 'bold'}}>Pedreiro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.buttonarea, , {backgroundColor: '#040837', marginLeft: 10}]}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Técnico de Enfermagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* parte footer */}
            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}