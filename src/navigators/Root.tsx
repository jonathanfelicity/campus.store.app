import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    WelcomeScreen,
    NotificationScreen,
    LoginScreen
} from '../screens'

import {AppTaps} from ".";


const Stack = createNativeStackNavigator()




const Root = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="AppTap" component={AppTaps}/>
                <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Root