import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { View } from "react-native"
import StockList from "./StockList";
import StockDetail from "./StockDetail";
import GlobalText from "../../components/text/GlobalText";

const Stack = createStackNavigator();

const Stock = () => {

    return (
        <Stack.Navigator  
            initialRouteName="StockList" 
            screenOptions={{ 
                headerStyle: {  backgroundColor: '#000' },
                headerTintColor: '#fff', 
            }}
        >
            <Stack.Screen 
                name="StockList" 
                component={StockList}  
                options={{ 
                    title: 'Bourse en direct',
                    headerTitleAlign: "left",
                }}
            />
            <Stack.Screen 
                name="StockDetail" 
                component={StockDetail}  
                options={({ route }) => ({ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        // title: route.params.quote.shortName, 
                        headerTitle: (props) => 
                            <View style={{flexDirection: "row"}}>
                                <GlobalText color="#ffffff" fontSize={20}>{route.params.quote.symbol}</GlobalText>
                                <GlobalText color="#ffffff">{route.params.quote.shortName}</GlobalText>
                            </View>
                    })
                }
            />
        </Stack.Navigator>
    )
}

export default Stock