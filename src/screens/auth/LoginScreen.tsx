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
                />
                
            </View>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 20}}>Or Continue With</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
                        <Image source={require('../../res/assets/icons/facebook.png')} style={{ width: 30, height: 30}}/>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 10}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
                        <Image source={require('../../res/assets/icons/google.png')} style={{ width: 30, height: 30}}/>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 10}}>Google</Text>
                    </TouchableOpacity>
                </View>
            
            <Button title="Login"/>
        </View>
    )
}


export default LoginScreen