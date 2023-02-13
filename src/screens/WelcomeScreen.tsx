import { View, Text } from "react-native"
import { styles } from "../res"
import Button from "../components/Button"



const WelcomeScreen = () =>{
    return (
        <View style={[ styles.container ]}>
           <View>
                <Text style={[ styles.title ]}>Campus Store</Text>
                <Text>Buy and Sell Within your campus.</Text>
            </View> 
            <Button title="Continue"/>
        </View>
    )
}


export default WelcomeScreen