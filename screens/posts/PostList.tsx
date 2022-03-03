import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native"
import GlobalText from "../../components/text/GlobalText";

import Ionicons from '@expo/vector-icons/Ionicons';

import ApiPost from "../../services/api/ApiPost";
import ApiMarketStack from "../../services/api/ApiMarketStack";
import CarouselList from "../../components/carousel/CarouselList";

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
    cardHeaderContent: {flexDirection: 'row'},
    cardFooterContent: {
        flexDirection: 'row', 
        flex:1,
        paddingVertical:10,
        paddingHorizontal:10,
    }

});

interface IUser {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
    posts?: Array<object>;
    subscriptions?: Array<object>;
    haveAvatar?: boolean;
}

const PostList = ({navigation}:any) => {

    const [ user, setUser ] = useState<IUser>({
        id: 0,
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        createdAt:"",
        updatedAt:"",
        posts: [],
        subscriptions: [],
        haveAvatar:false
    })

    const [ isLiked, setIsLiked ] = useState(false)
    const [ postId, setPostId ] = useState(0)

    const handleLike = (postId:number) => {
        setIsLiked(!isLiked)
        setPostId(postId)
    }

    useEffect(() => {
        ApiPost.getPosts().then(userData => setUser(userData.data))
    }, [])

    useEffect(() => {
        ApiMarketStack.getQuote()
        ApiMarketStack.getSpark()
    })

    useEffect(() => {
        ApiPost.updateLikeStatus(postId, isLiked)
    }, [isLiked])

    return (
        <SafeAreaView>
            <View style={styles.headerProfile}>
                <Ionicons name="person-circle-outline" size={48} color="grey" onPress={() => navigation.navigate('Profile')}/>
                <GlobalText onPress={() => navigation.navigate('NewPost')} color={"#dddddd"}>Quoi de neuf ?</GlobalText>
            </View>

            <CarouselList users={user.subscriptions} />
            
            <ScrollView>
                {
                    user.posts.map((post:any) => 
                    <View key={post.id} style={styles.cardContainer}>
                        <View style={styles.cardAvatar}>
                            <Ionicons 
                                name="person-circle-outline" 
                                size={48} 
                                color="grey" 
                                onPress={() => navigation.navigate('Profile')}
                            />
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardHeaderContent}>
                                <GlobalText color="#dddddd">{user.name}</GlobalText>
                                <GlobalText color="#dddddd">{user.createdAt}</GlobalText>
                            </View>
                            <GlobalText color="#dddddd">{post.content}</GlobalText>
                            <View style={styles.cardFooterContent}>
                                <Ionicons name="chatbubble-outline" size={24} color="#aaaaaa" style={{flex:1}} onPress={() => navigation.navigate('Profile')}/>
                                <Ionicons name="arrow-redo-outline" size={24} color="#aaaaaa" style={{flex:1}} onPress={() => navigation.navigate('Profile')}/>
                                <Ionicons name={post.isLiked ? "heart" : "heart-outline"} size={24} color="#aaaaaa" style={{flex:1}} onPress={() => handleLike(post.id)}/>
                        </View>
                        </View>
                    </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostList