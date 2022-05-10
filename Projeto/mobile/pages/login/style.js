import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#3D69FA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 500,
        height: 500,
        top: 150,
        marginLeft: 80,
    },
    textInput: {
        top: 50,
        margin: 5,
        marginLeft: 40,
        borderWidth: 2,
        borderColor: '#fff',
        width: 330,
        borderRadius: 50,
        padding:4,
        paddingLeft: 10,
        margin: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        fontWeight: 'bold',
    },
    logo: {
        top: 0,
        width: 180,
        height: 31,
        marginLeft: 120
    },
    buttontext: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        width: 327,
        margin: 6,
        padding: 8,
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 50,
        top: 50,
        marginLeft: 40
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    alignmargin: {
        top: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 90
    },
    text: {
        fontSize: 16.5,
        color: "#fff",
    },
    text2: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
    },
})