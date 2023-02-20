import { TextInput } from "react-native"
import { styles } from "../res"


const Input = ({hint}) =>{
    return (
        <TextInput
            style={styles.input}
            placeholder={hint}
        />
    )
}


export default Input