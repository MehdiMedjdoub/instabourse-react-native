import React from "react";
import { StyleSheet, View, Text, NativeModules, Platform } from "react-native";
import CustomText from "./CustomText";

const Header = () => {

    const {StatusBarManager} = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBarManager.HEIGHT;

    const styles = StyleSheet.create({
		container: {
		    paddingTop: STATUSBAR_HEIGHT,
            paddingLeft: 30,
		},
        title: {
            color:"#fff"
        }
	});

    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Instabourse</CustomText>
        </View>
    )
}

export default Header;