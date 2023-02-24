import { View } from "react-native"
import { styles } from "../res"
import { TopBar } from "../components"




const SellScreen = () =>{
    return (
        <View style={[styles.container]}>
            <TopBar title="Post New Ad"/>
        </View>
    )
}
export default SellScreen