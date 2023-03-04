import { View, FlatList, Text } from "react-native"
import { styles } from "../res"
import { Button, TopBar } from "../components"

const bookmark = [
    {
        id: 1,
        title: 'roemlj sjd ss',
        price: '34'
    },
    {
        id: 2,
        title: 'roemlj sjd ss',
        price: '34'
    },
    {
        id: 3,
        title: 'roemlj sjd ss',
        price: '34'
    }
]

const SaveScreen = () =>{
    return (
        <View style={[styles.container]}>
            <TopBar title="Bookmark"/>

            <FlatList
                data={bookmark}
                renderItem={({item})=>{
                    return (
                        <View>
                            <Text>{item.title}</Text>
                            
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
            <Button title="Clear All"/>
        </View>
    )
}
export default SaveScreen