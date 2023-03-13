import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";




export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [isLoading, SetIsLoading] = useState(false)


    const signup = ()=>{}
    const login = ()=>{}


    const logout = async () => {
        setToken(null)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user') 
    }






    
    
    const isLoggedIn = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            
            setToken(JSON.parse(token))


        } catch (e) {
            console.log(e)
        }
    }


    
    
    
    
    useEffect(() => {
        isLoggedIn()
    }, [])

    
    
    
    
    
    
    
    
    const value = {
        login,
        logout,
        token,
        
    
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}


