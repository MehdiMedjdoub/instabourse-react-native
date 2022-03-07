import React, { useState, useEffect } from "react"
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native"
import GlobalText from "../../components/text/GlobalText"
import ApiMarketStack from "../../services/api/ApiMarketStack"
import StockChart from "../../components/stock/Chart"
import styles from "./StockList.styles"

import Quote from "../../datatest/quote"
import Spark from "../../datatest/spark"

const StockList = ({navigation}:any) => {

    // const [ Quote, setQuote ] = useState()
    // const [ Spark, setSpark ] = useState()
    const [ color, setColor ] = useState("")

    const getColor = (regularMarketChange:number) => {
         return regularMarketChange < 0 ? "#e60000" : "#33ff33"
    }
    
    // useEffect(() => {
    //     ApiMarketStack.getQuote().then(response => setQuote(response))
    //     ApiMarketStack.getSpark().then(response => setSpark(response))
    // },[])

    return (
        <SafeAreaView>
            <ScrollView>
                {Quote != undefined && Quote.quoteResponse.result.map((quote:any) => (
                    <TouchableOpacity 
                        key={quote.symbol}
                        style={styles.cardContainer} 
                        onPress={() => navigation.navigate('StockDetail', {
                            quote: quote, 
                            spark: Spark[quote.symbol], 
                            color: getColor(quote.regularMarketChange)
                            })}
                    >
                        <View style={styles.cardTitle}>
                            <GlobalText color="#ffffff" fontSize={20}>{quote.symbol}</GlobalText>
                            <GlobalText color="#cccccc" fontSize={12}>{quote.shortName}</GlobalText>
                        </View>
                        <View style={styles.chartContainer}>
                            {Spark != undefined && <StockChart spark={Spark[quote.symbol]} color={getColor(quote.regularMarketChange)} /> }                           
                        </View>
                        <View style={styles.cardContent}>
                            <GlobalText color="#ffffff" fontSize={20}>{quote.regularMarketPrice}</GlobalText>
                            <View style={{backgroundColor: getColor(quote.regularMarketChange), width: "70%", height: "20%", borderRadius: 8,justifyContent: 'center', 
alignItems: 'center' }}>
                                <GlobalText color="#ffffff">{Math.round((quote.regularMarketChange + Number.EPSILON) * 100) / 100}</GlobalText>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default StockList