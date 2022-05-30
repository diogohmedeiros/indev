import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { DrawerActions } from '@react-navigation/drawer';
import style from './style.js';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import TabBar from '../components/tabBar';

const image = require('../../assets/app/predio.png')

export default function Home({ navigation }) {
    const [buscar, setBuscar] = useState("");

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
                
                <Text style={{fontWeight: 'bold', fontSize:21, top: -125, right: 80}}>Olá, nome do usuario!</Text>

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
            </View>

            {/* parte footer */}
            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}