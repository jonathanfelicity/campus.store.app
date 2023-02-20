import { View, Text } from "react-native"
import { styles } from "../res"
import Button from "../components/Button"



const WelcomeScreen = ({ navigation }) =>{
    const handleContinue = ()=>{
        navigation.navigate('HomeScreen')
    }
    return (
        <View style={[ styles.container, styles.h_v_cen ]}>
           <View>
                <Text style={[ styles.title ]}>Campus Store</Text>
                <Text>Buy and Sell Within your campus.</Text>
            </View> 
            <Button title="Continue" onPress={ handleContinue }/>
        </View>
    )
}


export default WelcomeScreen