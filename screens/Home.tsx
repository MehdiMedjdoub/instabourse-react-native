import React, { useState } from "react";
import { Button, Pressable, StyleSheet } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';

import GlobalText from "../components/text/GlobalText";
import LogoText from "../components/text/LogoText";

import ActualityFeed from "./ActualityFeed";
import Profile from "./Profile";
import NewPost from './posts/NewPost';
import NewsList from "./NewsList";

import ApiPost from "../services/api/ApiPost";
import PostList from "./posts/PostList";



const Stack = createStackNavigator();

const Home = () => {

    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderWidth:1,
            borderColor: "#cccccc",
            borderRadius: 4,
            elevation: 3,
          }
    })

    const [ isbtnDisabled, setIsBtnDisabled ] = useState(true)
    const [ post, setPost ] = useState("")

    const isTextEmpty = (text:string) => {
        text.length === 0 ? setIsBtnDisabled(true) : setIsBtnDisabled(false)
        setPost(text)
    }

    const submitPost = () => {
        ApiPost.addPost(post)
        console.log(post)
    }

    return (
        <Stack.Navigator  initialRouteName="ActualityFeed" >
            <Stack.Screen 
                name="ActualityFeed" 
                component={ActualityFeed} 
                options={{ 
                    headerTitle: (props) => <LogoText {...props} />,
                    headerTitleAlign: "left",
                    headerStyle: {  
                        // backgroundColor: '#28272c' 
                        backgroundColor: '#000'
                    },
                    headerTintColor: '#fff', 
                }}
            />
            <Stack.Group 
                screenOptions={({ navigation }) => ({
                    headerStyle: {  
                        // backgroundColor: '#28272c'
                        backgroundColor: '#000'
                     },
                    headerTintColor: '#fff',
                    headerLeft: () => <Button title="<" onPress={navigation.goBack} />,
                  })}
            >
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen 
                    name="NewPost"
                    options={{ 
                        title: 'Créer un publication',
                        headerRight: () => (
                            <Pressable 
                                disabled={isbtnDisabled}
                                onPress={() => submitPost }
                                style={styles.button}
                             >
                                 <GlobalText color="#dddddd">Publier</GlobalText>
                            </Pressable>

                        ),
                    }}>
                    {props => <NewPost {...props} isTextEmpty={isTextEmpty} />}
                </Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default Home