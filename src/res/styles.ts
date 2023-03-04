import { StyleSheet } from "react-native";
import {lightColor,} from ".";

const HEADING_LARGE = 34
const HEADING_MEDIUMS = 20
const HEADING_SMALL = 17
const BODY_LARGE = 17
const BODY_SMALL = 14
const BODY_MEDIUM = 16
const CAPTION = 12
const TEXT = 16



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    // center vertical and horizontally
    h_v_cen:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        color: '#000'
    },
    btn:{
        padding: 16,
        backgroundColor: '#47E086',
        borderRadius: 10
        
    },
    btn_text:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    },
    input:{
        padding: 16,
        fontWeight: "bold",
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C2BDBD',
        fontSize: TEXT
        
    }
})





export default styles