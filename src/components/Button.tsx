import { TouchableOpacity, Text } from "react-native"
import { styles } from "../res"

const Button = ({title, onPress}) =>{
    return (
        <TouchableOpacity style={[styles.btn]} onPress={ onPress }>
            <Text style={[ styles.btn_text]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button