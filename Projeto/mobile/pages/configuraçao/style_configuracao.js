import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa'
    },
    header: {
        height: 85,
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
        height: '32%'
    }
})