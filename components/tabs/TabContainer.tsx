import React from "react";
import { View } from "react-native"
import ButtonTab from "../../components/tabs/ButtonTab";
import styles from "./TabContainer.styles";

const TabContainer = () => {
    return (
        <View style={styles.container}>
            <ButtonTab title="Invitations" goTo="Invitation" />
            <ButtonTab title="Mon réseau" goTo="MyNetwork" />
        </View>
    )
}

export default TabContainer