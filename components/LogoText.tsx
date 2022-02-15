import React from "react";
import { Text, StyleSheet } from "react-native"
import AppLoading from 'expo-app-loading';
import {  useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'

const LogoText = (props:any) => {

    let [fontsLoaded] = useFonts({ Lobster_400Regular });

    if(!fontsLoaded) {
        return (<AppLoading />)
    } else {
        return(
            <Text 
                onPress={props.onPress} 
                style={{ 
                    fontFamily: 'Lobster_400Regular', 
                    color: '#eeeeee',
                    fontSize:30
                }}
            >
                InstaStock
            </Text>
        )
    }
}

export default LogoText