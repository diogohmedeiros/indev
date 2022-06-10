import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 78,
        backgroundColor: '#3757BE',
        alignItems: 'center', 
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    trocarfoto: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 160,
        justifyContent: 'space-around',
        padding: 5,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        margin: 7
    },
    fotonome: {
        alignItems: 'center',
        backgroundColor: '#EBEEF5',
        width: '100%', 
        height: '24%'
    },
    campo: {
        padding: 8,
        borderBottomWidth: 2, 
        borderColor: '#3D69FA', 
        margin: 2
    },
    textCampo: {
        fontWeight: 'bold',
    },
    descricao: {
        borderWidth: 2, 
        height: 150,
        borderColor: '#3D69FA',
        borderRadius: 9,
        textAlignVertical: 'top',
        paddingLeft: 10,
        fontWeight: 'bold', 
        padding: 7,
        marginTop: 20
    },
    salvar: {
        backgroundColor:"#040837", 
        flexDirection: 'row',
        width: 300, 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    viewpicker: {
        height: 35,
        marginTop: -10
    }
})