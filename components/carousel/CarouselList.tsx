import React from "react";
import { ScrollView, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalText from "../text/GlobalText";
import { styles } from "./CarouselList.style";

const CarouselList = (props:any) => {

    return <>
        <ScrollView horizontal style={styles.carouselItems}>
            {props.users.map((user:any, index:any) => (
                <View style={styles.carouselItem} key={index}>
                    {
                    user.haveAvatar ? 
                    <Ionicons 
                        name="person-circle-outline" 
                        size={60} 
                        color="grey" 
                        onPress={() => console.log('subscription profile')}
                    />
                    :
                    <Ionicons 
                        name="person-circle-outline" 
                        size={60} 
                        color="grey" 
                        onPress={() => console.log('subscription profile')}
                    />
                    }
                    <GlobalText color="#cccccc">{user.userName}</GlobalText>
                </View>
            ))}
        </ScrollView>
    </>
}

export default CarouselList;