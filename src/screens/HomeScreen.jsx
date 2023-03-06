import { Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TopBar } from "../components";




const menu = [
    {
        id:1,
        title: "Electronics",
        icon: 'image.png'
        
    },
    {
        id: 2,
        title: "Note",
        icon: 'image.png'
    },
    {
        id: 3,
        title: "Book",
        icon: 'image.png'
    },
    {
        id: 4,
        title: "Project",
        icon: 'image.png'
    }

]

import { styles } from "../res"


const HomeScreen = () => {
    return (
        <View style={[styles.container]}>
            <TopBar title="Find Advert" />

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
            <View style={{ backgroundColor: 'green', width: 200}}>
                
            </View>
            <View>
                <Text>Ad Categories</Text>
                <FlatList
                    data={menu}
                
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity style={c_styles.item}>
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        </View>
    )
}



export default HomeScreen


const c_styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        flex: 1 / 2, // Set the width of each item to 1/2 of the screen width
        aspectRatio: 1, // Set the aspect ratio to 1 (i.e., each item will be square)
        borderRadius: 15
      }
})