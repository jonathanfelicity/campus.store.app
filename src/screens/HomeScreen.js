import { Text, View, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TopBar } from "../components";


import { styles } from "../res"


const HomeScreen = () =>{
    return (
        <View style={[ styles.container ]}>
            <TopBar title="Find Advert"/>

            <View style={{
                backgroundColor: '#FEF5EC',
                flexDirection: 'row',
                alignItems: "center",
                padding: 7,
                borderRadius: 10

            }}>
                <Icon name="comments" size={25} color="#f1ab1f" />
                <TextInput
                    placeholder="What do you want?"
                />
            </View>
        </View>
    )
}



export default HomeScreen