import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const PostForm = (props:any) => {
    const [text, onChangeText] = React.useState("");

    useEffect(() => {
        props.isTextEmpty(text)
    }, [text])

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                numberOfLines={10}
                multiline={true}
                placeholder="Quoi de neuf ?"
                placeholderTextColor="#dddddd"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
    //   margin: 12,
    //   borderWidth: 1,
      padding: 10,
      color: '#dddddd',
      height: '100%'
    },
});

export default PostForm