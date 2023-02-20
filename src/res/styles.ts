import { StyleSheet } from "react-native";
import {lightColor,} from ".";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    // center vertical and horizontally
    h_v_cen:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 32,
        fontWeight: "bold"
    },
    btn:{
        padding: 16,
        backgroundColor: '#47E086',
        borderRadius: 16
        
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
        
    }
})





export default styles