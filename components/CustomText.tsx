import React from "react";
import { Text, StyleSheet } from "react-native"
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Jura_300Light,
    Jura_400Regular,
    Jura_500Medium,
    Jura_600SemiBold,
    Jura_700Bold 
  } from '@expo-google-fonts/jura';

const CustomText = (props:any) => {

    let [fontsLoaded] = useFonts({
        Jura_300Light,
        Jura_400Regular,
        Jura_500Medium,
        Jura_600SemiBold,
        Jura_700Bold 
      });

    const styles = StyleSheet.create({
        fontStyle: {
            fontFamily: 'Jura_700Bold',
            color: props.color
        }
    })

    if(!fontsLoaded) {
        return (<AppLoading />)
    } else {
        return(
            <Text onPress={props.onPress} style={styles.fontStyle}>
                {props.children}
            </Text>
        )
    }
}

export default CustomText