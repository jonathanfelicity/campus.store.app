import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../res"
import Button from "../components/Button"



const WelcomeScreen = ({ navigation }) =>{
    const handleContinue = ()=>{
        navigation.navigate('LoginScreen')
    }
    const handleSkip = ()=>{
        navigation.navigate('AppTap')
    }
    return (
        <View style={[ styles.container, styles.h_v_cen ]}>
           <View>
                <Text style={[ styles.title ]}>Campus Store</Text>
                <Text>Buy and Sell within your campus.</Text>
            </View> 
            <Button title="Continue" onPress={ handleContinue }/>
            <TouchableOpacity onPress={handleSkip}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}


export default WelcomeScreen