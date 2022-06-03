import React, { useState }from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import style from './style_contato.js';

import TabBar from '../components/tabBar/tabbar';

export default function Contato({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    return (
        <View style={style.container}>
            {/* parte header */}
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Image source={require('../../assets/app/menuburguer.png')} 
                        style={{width: 30, height: 30, right: 53}}
                        resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 23, right: 160}}>Contato</Text>
            </SafeAreaView>

            
            <View style={{height: 30, justifyContent: 'center', top: 12}}>
                <Text style={{fontSize: 15 ,fontWeight: 'bold', left: 17}}>ENVIE SUA MENSAGEM</Text>
            </View>

            {/* formulario inputs */}
            <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{top: -13}}>
                    <TextInput
                        value={nome}
                        onChangeText={setNome} 
                        placeholderTextColor={'#3757BE'} 
                        placeholder={"NOME COMPLETO"} 
                        style={style.textInput}
                    />

                    <TextInput
                        value={email}
                        onChangeText={setEmail} 
                        placeholderTextColor={'#3757BE'} 
                        placeholder={"EMAIL"} 
                        style={style.textInput}
                    />

                    <TextInput
                        value={assunto}
                        onChangeText={setAssunto} 
                        placeholderTextColor={'#3757BE'} 
                        placeholder={"ASSUNTO"} 
                        style={style.textInput}
                    />

                    <TextInput
                        value={mensagem}
                        onChangeText={setMensagem} 
                        placeholderTextColor={'#3757BE'} 
                        placeholder={"MENSAGEM"}
                        multiline={true}
                        style={style.textInput2}
                    />

                    <TouchableOpacity style={style.enviar}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>

                {/* informações para contato */}
                <View style={{width: 360}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/app/envelopeazul.png')} style={style.image}/>
                        <Text style={style.text1}>contato@indev.com</Text>
                    </View>
                        <Text style={style.text2}>comercial@indev.com</Text>
                    
                    <View style={{borderWidth: 1, borderColor: '#3D69FA', margin: 5}}></View>

                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/app/telefoneazul.png')} style={style.image}/>
                        <Text style={style.text1}>+55 19 3867-0000</Text>
                    </View>
                        <Text style={style.text2}>+55 19 99900-9900</Text>

                    <View style={{borderWidth: 1, borderColor: '#3D69FA', margin: 5}}></View>

                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/app/markerazul.png')} style={style.image}/>
                        <Text style={style.text1}>R. Anésia Venturini Zani, 62 - Centro</Text>
                    </View>
                        <Text style={style.text2}>Jaguariúna - SP, 13820-000</Text>
                </View>
            </View>

            <View style={style.footer}>
                <TabBar navigation={navigation} />
            </View>
        </View>
    )
}