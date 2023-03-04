import { TextInput } from "react-native"
import { styles } from "../res"


const Input = ({hint, secureTextEntry}) =>{
    return (
        <TextInput
            style={styles.input}
            placeholder={hint}
            secureTextEntry={secureTextEntry}
        />
    )
}


export default Input