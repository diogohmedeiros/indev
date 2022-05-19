import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 70,
        backgroundColor: '#3757BE',
        alignItems: 'center', 
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    tabbar: {
        backgroundColor: '#3D69FA',
        height: 25,
    },
    textInput: {
        borderWidth: 3,
        borderColor: '#3757BE',
        padding: 8,
        borderRadius: 12,
        width: 360,
        fontWeight: 'bold',
        paddingLeft: 20,
        margin: 4
    },
    textInput2: {
        borderWidth: 3,
        borderColor: '#3757BE',
        padding: 8,
        borderRadius: 12,
        width: 360,
        fontWeight: 'bold',
        height: 200,
        paddingLeft: 20,
        margin: 4,
        textAlignVertical: 'top'
    },
    enviar: {
        backgroundColor: '#040837',
        width: 360,
        margin: 4,
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontWeight: 'bold', 
        fontSize: 15, 
        left: 12,
        top: 7
    },
    text2: {
        fontWeight: 'bold', 
        fontSize: 15, 
        left: 40
    },
    image: {
        width: 27, 
        height: 27, 
        top: 14
    }
})