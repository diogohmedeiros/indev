import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 70,
        backgroundColor: '#3757BE',
        alignItems: 'center', 
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    corpo: {
        marginTop: 30,
        margin: 30,
        paddingTop: 20,
    },
    numvagas: {
        fontWeight: 'bold', 
        left: 20,
        padding: 4,
        borderRadius: 7,
        width:80,
        textAlign: 'center',
        backgroundColor: '#EBEEF5'
    }
})