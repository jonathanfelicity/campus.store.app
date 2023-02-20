import { Text, View } from "react-native"
import { Button, Input } from "../../components"

const LoginScreen = ()=>{
    return (
        <View>
            <View>
                <Text>Login To Your Account</Text>
                <Input 
                    hint="Email"
                />
                <Input
                    hint="Password"
                />
                
            </View>
                <Text>Or Continue With</Text>
                <View>

                </View>
            
            <Button title="Login" onPress={alert("Fire")}/>
        </View>
    )
}


export default LoginScreen