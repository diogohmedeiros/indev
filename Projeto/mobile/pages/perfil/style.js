import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeee'
    },
    header: {
        height: 400,
        backgroundColor: '#040837',
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    avatar: {
        backgroundColor: '#e5e5e5', 
        width: 170,
        height: 170,
        borderRadius: 90,
        top: 10,
        borderWidth: 4,
        borderColor: '#fff', 
        right: 75
    },
    nomeUser: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        top: 20,
        right: 80
    },
    containerInfo: {
        backgroundColor: '#fff',
        width: 370,
        height: 450,
        borderRadius: 17,
        borderWidth: 3,
        borderColor: '#3757BE',
        top: -65,
        alignItems: 'center',
    },
    configurar: {
        width: 220,
        backgroundColor: '#EBEEF5',
        flexDirection: 'row',
        padding: 6, 
        justifyContent: 'space-around',
        borderRadius: 8,
        top: -15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    imgbgd: {
        width: 180,
        height: 400,
        left: 90,
        top: 20
    }
})