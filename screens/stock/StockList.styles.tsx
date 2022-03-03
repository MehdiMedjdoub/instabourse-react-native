import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: { 
        flexDirection: 'row',
        height: 90,
        borderBottomColor: '#47476b',
        borderBottomWidth: 1 
    },
    cardTitle: {
        flex: 4
    },
    cardContent: {
        flex: 2
    },
    chartContainer: {
        flex:4,
        height: 100
    },
    progressBadge: {
        width: "70%",
        height: "20%",
        borderRadius: 8,
    }
})

export default styles