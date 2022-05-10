import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 85,
        backgroundColor: '#3D69FA',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row'
    },
    search: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
        width: 320,
        padding: 4,
        paddingLeft: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        fontWeight: 'bold',
    }
})