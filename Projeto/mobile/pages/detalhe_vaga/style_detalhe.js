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
        marginTop: 17,
        margin: 30,
        paddingTop: 20,
        flex: 6
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
    button: {
        marginRight: 10, 
        backgroundColor:"#040837", 
        borderWidth:1,
        height: 40,
        width: 160, 
        padding: 6,
        borderRadius: 7,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})