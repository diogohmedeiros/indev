import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 115,
        backgroundColor: '#3757BE',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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
        top: -15
    },
    cards: {
        borderWidth: 2,
        borderColor: '#3D69FA',
        width: 370,
        borderRadius: 20,
        padding: 15,
        paddingBottom: 25,
        margin: 6
    },
    contvagas: {
        alignItems: 'center',
        flex: 6,
        top: -5
    },
    row: {
        flexDirection: 'row',
    },
    numvagas: {
        fontWeight: 'bold', 
        left: 20,
        padding: 4,
        borderRadius: 7,
        width:80,
        textAlign: 'center',
        backgroundColor: '#EBEEF5'
    },
    salario: {
        flexDirection: 'row',
    },
    abre: {
        alignItems: 'center',
        top: 14,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    filtros: {
        borderWidth: 2,
        width: 350,
        padding: 14,
        borderRadius: 8,
        margin: 7,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    filtros_2: {
        flexDirection: 'row',
        padding: 9
    },
    text_filtro: {
        fontWeight: 'bold',
    },
    picker: {
        width: 340,
    },
    viewpicker: {
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        margin: 7,
        height: 52,
        paddingLeft: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    buttonfiltro: {
        borderWidth: 1,
        borderRadius: 6,
        width: 352,
        margin: 6,
        padding: 9,
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 10,
        top: 90,
    }
})