import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native"
import GlobalText from "../../components/text/GlobalText";
import styles from "./StockDetail.styles";
import StockChart from "../../components/stock/Chart";

const StockDetail = ({route, navigation}:any) => {

    const { quote, spark, color } = route.params
    const operator = quote.regularMarketChange > 0 ? "+" : "-"

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <GlobalText color="#ffffff" fontSize={20}>{quote.regularMarketPrice}</GlobalText>
                    <GlobalText color={color}>{operator + Math.round((quote.regularMarketChange + Number.EPSILON) * 100) / 100}</GlobalText>
                    <GlobalText color={color}>{Math.round((quote.regularMarketChangePercent + Number.EPSILON) * 100) / 100}%</GlobalText>
                    <GlobalText color="#ffffff">{quote.currency}</GlobalText>
                    <GlobalText color="#ffffff">{quote.fullExchangeName}</GlobalText>
                </View>
                <View style={styles.chart}>
                    {spark != undefined && <StockChart spark={spark} color={color} /> }
                </View>
                <ScrollView horizontal>
                    <View>
                        <View style={styles.itemTab}>
                            <GlobalText color="#bbbbbb">Ouverture</GlobalText>
                            <GlobalText color="#ffffff" fontSize={16}>{quote.regularMarketOpen}</GlobalText>
                        </View>
                        <View style={styles.itemTab}>
                            <GlobalText color="#bbbbbb">Max.</GlobalText>
                            <GlobalText color="#ffffff" fontSize={16}>{quote.regularMarketDayHigh}</GlobalText>
                        </View>
                        <View style={styles.itemTab}>
                            <GlobalText color="#bbbbbb">Min</GlobalText>
                            <GlobalText color="#ffffff" fontSize={16}>{quote.regularMarketDayLow}</GlobalText>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>     
        </SafeAreaView>
    )
}

export default StockDetail