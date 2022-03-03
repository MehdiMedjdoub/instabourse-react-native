import React from "react";
import { SafeAreaView, StyleSheet } from "react-native"
import PostForm from '../../components/post/PostForm'

const NewPost = (props:any) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#28272c',
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <PostForm isTextEmpty={props.isTextEmpty} />
        </SafeAreaView>
    )
}

export default NewPost