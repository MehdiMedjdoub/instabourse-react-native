import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View } from "react-native"
import { UserProfileContext } from "../../contexts/UserProfileContext";

import Ionicons from '@expo/vector-icons/Ionicons';
import CarouselList from "../../components/carousel/CarouselList";
import GlobalText from "../../components/text/GlobalText";
import styles from "./ActualityFeed.styles";

import Feeds from "../../datatest/feeds"

const ActualityFeed = ({navigation}:any) => {

    const currentUser = useContext(UserProfileContext)
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerProfile}>
                <Ionicons name="person-circle-outline" size={48} color="grey" onPress={() => navigation.navigate('Profile')}/>
                <GlobalText onPress={() => navigation.navigate('NewPost')} color={"#dddddd"}>Quoi de neuf ?</GlobalText>
            </View>

            <ScrollView>

                {currentUser && <CarouselList users={currentUser.subscriptions} />}

                {Feeds.map((article:any) =>       
                    (<View key={article.id} style={styles.cardContainer} >
                        <View style={styles.cardContent}>
                            <View>
                                <GlobalText color="#ffffff">{article.title}</GlobalText>
                                <GlobalText color="#dddddd">{article.published_at}</GlobalText>
                            </View>
                            <GlobalText color="#dddddd">{article.description}</GlobalText>
                            <View style={styles.cardFooterContent}>
                                <Ionicons name="thumbs-up-outline" size={24} color="#aaaaaa" style={{flex:1}} onPress={() => navigation.navigate('Profile')}/>
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