import { View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "../res"

const TopBar = ({ title, }) => {
    
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <Text style={[styles.title]}>{ title }</Text>
            <TouchableOpacity onPress={ ()=>{
                // navigation.navigate('NotificatonScreen')
            }}>
                <Icon name="comments" size={30} color="#900"/>
            </TouchableOpacity>
        </View>
    )
}


export default TopBar