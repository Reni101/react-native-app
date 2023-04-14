import {Platform, StyleSheet} from "react-native";
import {PADDING} from "../../constant/constant";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A6A6A6',
        flex: 1,
    },
    header: {
        borderWidth: 1,
        marginHorizontal: -PADDING,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#21201E',
        marginBottom: 19
    },
    footer: {
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E',
    },
    scrollTopButton:{
        position: 'absolute',
        bottom: 30,
        right: 30
    }
});