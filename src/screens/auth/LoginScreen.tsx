import { Text, View, Image, TouchableOpacity } from "react-native"
import { Button, Input } from "../../components"
import { styles } from "../../res"

const LoginScreen = ()=>{
    return (
        <View style={[ styles.container, { justifyContent: "center"}]}>
            <View>
                <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: "center"}}>Login To Your Account</Text>
                <Input 
                    hint="Email"
                />
                <Input
                    hint="Password"
                    secureTextEntry={true}
                />
                
            </View>
               
            <Button title="Login"/>
        </View>
    )
}


export default LoginScreen