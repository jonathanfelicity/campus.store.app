import { View } from "react-native"
import { styles } from "../res"
import { TopBar } from "../components"




const ChatScreen = () =>{
    return (
        <View style={[ styles.container]}>
            <TopBar title="Chats"/>
        </View>
    )
}
export default ChatScreen