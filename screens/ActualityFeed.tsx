import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native"
import GlobalText from "../components/text/GlobalText";

import Ionicons from '@expo/vector-icons/Ionicons';
import Feeds from "../datatest/feeds"

const styles = StyleSheet.create({
    headerProfile: {
        // backgroundColor: '#28272c',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    innerText: { color: "#cccccc" },
    cardContainer: {
        flexDirection: 'row',
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomColor: "#28272c",
        borderBottomWidth: 1
    },
    cardAvatar: { flex:1 },
    cardContent: { flex:6 },
    // cardHeaderContent: {flexDirection: 'row'},
    cardFooterContent: {
        flexDirection: 'row', 
        flex:1,
        paddingVertical:10,
        paddingHorizontal:10,
    }

});

const ActualityFeed = ({navigation}:any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerProfile}>
                <Ionicons name="person-circle-outline" size={48} color="grey" onPress={() => navigation.navigate('Profile')}/>
                <GlobalText onPress={() => navigation.navigate('NewPost')} color={"#dddddd"}>Quoi de neuf ?</GlobalText>
            </View>
            <ScrollView>
                {Feeds.map((article:any) =>       
                    (<View style={styles.cardContainer}>
                            
                        <View style={styles.cardContent}>
                            <View>
                                <GlobalText color="#ffffff">{article.title}</GlobalText>
                                <GlobalText color="#dddddd">{article.published_at}</GlobalText>
                            </View>
                            <GlobalText color="#dddddd">{article.description}</GlobalText>
                            <View style={styles.cardFooterContent}>
                                <Ionicons name="chatbubble-outline" size={24} color="#aaaaaa" style={{flex:1}} onPress={() => navigation.navigate('Profile')}/>
                                <Ionicons name="arrow-redo-outline" size={24} color="#aaaaaa" style={{flex:1}} onPress={() => navigation.navigate('Profile')}/>
                                    {/* <Ionicons name={post.isLiked ? "heart" : "heart-outline"} size={24} color="#aaaaaa" style={{flex:1}} onPress={() => handleLike(post.id)}/> */}
                            </View>
                        </View>
                    </View>)
                )}
            </ScrollView>
    </SafeAreaView>
    )
}

export default ActualityFeed;