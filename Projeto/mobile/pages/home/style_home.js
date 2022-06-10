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
        justifyContent: 'center',
        flexDirection: 'row'
    },
    search: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 12,
        width: 280,
        padding: 4,
        paddingLeft: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        fontWeight: 'bold',
    },
    tabbar: {
        backgroundColor: '#3D69FA',
        height: 25,
    },
    anuncie: {
        width: 375,
        height: 190,
        backgroundColor: '#040837',
        borderRadius: 15,
        top: -35
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 22,
        right: 230
    },
    imgbgd: {
        width: 100,
        height: 180,
        top: 10,
        left: 250
    },
    btnAnuncio: {
        width: 150,
        borderWidth: 3,
        borderColor: '#3D69FA',
        borderRadius: 8,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        right: 230,
        top: 30
    },
    vagasProc: {
        width: 370,
        height: 120,
        top: -6,
        alignItems: 'center',
    },
    cards: {
        flexDirection: 'row',
        margin: 10,
    },
    cardButton: {
        width: 115,
        height: 115,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff', 
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    four: {
        width: "100%",
        height: "30%",
        justifyContent: "center",
    },
    doisprimeiro: {
        width: "100%",
        height: "50%",
        marginTop: 80,
        flexDirection: 'row',
        margin: 20
    },
    doisultimo: {
        width: "100%",
        height: "50%",
        marginTop: -10, 
        flexDirection: 'row',
        margin: 20
    },
    buttonarea: {
        borderWidth: 2,
        borderRadius: 10,
        width: 180,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 6,
    }
})