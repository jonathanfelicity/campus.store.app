import { View } from "react-native"
import { styles } from "../res"
import { TopBar } from "../components"




const ProfileScreen = () =>{
    return (
        <View style={[styles.container]}>
            <TopBar title="Profile"/>
        </View>
    )
}
export default ProfileScreen