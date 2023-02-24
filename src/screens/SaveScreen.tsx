import { View } from "react-native"
import { styles } from "../res"
import { TopBar } from "../components"



const SaveScreen = () =>{
    return (
        <View style={[styles.container]}>
            <TopBar title="Bookmark"/>
        </View>
    )
}
export default SaveScreen