import React from "react";
import { Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native';
import GlobalText from "../text/GlobalText";
import styles from "./ButtonTab.styles";

const ButtonTab = (props:any) => {
    
    const navigation = useNavigation()
    return <>
        <Pressable style={styles.buttonTab} onPress={() => navigation.navigate(props.goTo)}>
            <GlobalText color="#ffffff">{props.title}</GlobalText>
        </Pressable>
    </>
}

export default ButtonTab