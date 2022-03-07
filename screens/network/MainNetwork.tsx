import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native"
import TabContainer from "../../components/tabs/TabContainer";
import GlobalText from "../../components/text/GlobalText";

const MainNetwork = () => {

    return (
        <SafeAreaView>  
            <ScrollView>
                <TabContainer />
                <View>
                    <GlobalText color="#ffffff">Suggestions</GlobalText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainNetwork