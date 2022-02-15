import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    carouselItems: {
        height: 200,
        display: 'flex',
        padding: 1,
        marginVertical: 10,
        borderBottomColor:  '#aaa',
        borderBottomWidth: 0.2
    },
    carouselItem: {
        width:90,
        height:130,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 1,
        marginRight: 10,
        marginVertical:10,
        padding:5,
        borderWidth: 0.2,
        borderColor:  '#fff',
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    carouselItemSelected: {
        borderWidth: 1,
        borderColor:  '#fff',
        borderStyle: 'solid'
    }
})