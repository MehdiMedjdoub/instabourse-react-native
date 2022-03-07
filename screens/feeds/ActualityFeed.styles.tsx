import { StyleSheet } from "react-native";

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
        alignItems: 'center',
    }
});

export default styles