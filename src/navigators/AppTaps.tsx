import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { 
    HomeScreen,
    SaveScreen,
    SellScreen,
    ChatScreen,
    ProfileScreen
} from "../screens";

const BottomTab = createBottomTabNavigator()


const AppTaps = () =>{
    return (
            <BottomTab.Navigator
                screenOptions={{headerShown: false}}
            >
                <BottomTab.Screen name="Home" component={HomeScreen}/>
                <BottomTab.Screen name="Save" component={SaveScreen}/>
                <BottomTab.Screen name="Sell" component={SellScreen}/>
                <BottomTab.Screen name="Chat" component={ChatScreen}/>
                <BottomTab.Screen name="Profile" component={ProfileScreen}/>
            </BottomTab.Navigator>
    )
}

export default AppTaps