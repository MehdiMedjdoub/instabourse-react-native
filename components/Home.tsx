import React, { useState } from "react";
import { Button, Pressable, StyleSheet } from "react-native"

import { createStackNavigator } from '@react-navigation/stack';
import ApiPost from "../services/api/ApiPost";

import Profile from "../screens/Profile";
import NewPost from './NewPost';
import Setting from "../screens/Setting";
import PostList from "../screens/PostList";
import CustomText from "./CustomText";
import LogoText from "./LogoText";

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
            //backgroundColor: 'black',
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
        <Stack.Navigator  initialRouteName="PostList" >
            <Stack.Screen 
                name="PostList" 
                component={PostList} 
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
                <Stack.Screen name="Setting" component={Setting} />
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
                                 <CustomText color="#dddddd">Publier</CustomText>
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