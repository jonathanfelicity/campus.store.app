import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign';

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
                tabBarOptions={{
                    showLabel: false,
            
            }}
            >
                <BottomTab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="home" size={30} color="#f1ab1f" />,
                    }}
                    name="Home" 
                    component={HomeScreen}
                />
                <BottomTab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="hearto" size={30} color="#f1ab1f" />,
                    }}
                    name="Save" 
                    component={SaveScreen}
                />
                <BottomTab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="pluscircleo" size={30} color="#f1ab1f" />,
                    }}
                    name="Sell" 
                    component={SellScreen}
                />
                <BottomTab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="message1" size={30} color="#f1ab1f" />,
                    }}
                    name="Chat" 
                    component={ChatScreen}
                />
                <BottomTab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="user" size={30} color="#f1ab1f" />,
                    }}
                    name="Profile" 
                    component={ProfileScreen}
                />
            </BottomTab.Navigator>
    )
}

export default AppTaps