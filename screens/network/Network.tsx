import React from "react";
import { View } from "react-native"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainNetwork from "./MainNetwork";
import MyNetwork from "./MyNetwork";
import Invitation from "./Invitation";
import GlobalText from "../../components/text/GlobalText";

const Stack = createStackNavigator();

const Network = () => {

    return (
        <Stack.Navigator  
            initialRouteName="MainNetwork" 
            screenOptions={{ 
                headerStyle: {  backgroundColor: '#000' },
                headerTintColor: '#fff', 
            }}
        >
            <Stack.Screen 
                name="MainNetwork" 
                component={MainNetwork}  
                options={{ 
                    title: 'Réseau',
                    headerTitleAlign: "left",
                }}
            />
            <Stack.Screen 
                name="MyNetwork" 
                component={MyNetwork}  
                // options={({ route }) => ({ 
                //         cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                //         // title: route.params.quote.shortName, 
                //         headerTitle: (props) => 
                //             <View style={{flexDirection: "row"}}>
                //                 <GlobalText color="#ffffff" fontSize={20}>{route.params.quote.symbol}</GlobalText>
                //                 <GlobalText color="#ffffff">{route.params.quote.shortName}</GlobalText>
                //             </View>
                //     })
                // }
            />
            <Stack.Screen 
                name="Invitation" 
                component={Invitation}  
                // options={({ route }) => ({ 
                //         cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                //         // title: route.params.quote.shortName, 
                //         headerTitle: (props) => 
                //             <View style={{flexDirection: "row"}}>
                //                 <GlobalText color="#ffffff" fontSize={20}>{route.params.quote.symbol}</GlobalText>
                //                 <GlobalText color="#ffffff">{route.params.quote.shortName}</GlobalText>
                //             </View>
                //     })
                // }
            />
        </Stack.Navigator>
    )
}

export default Network