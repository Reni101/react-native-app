import {Platform, StyleSheet} from "react-native";
import {PADDING, WIDTH} from "./src/constant/constant";

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

    imageStyle: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8,
    },
    itemProps: {
        backgroundColor: 'white',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 10
    },
    infoIphone: {
        marginTop: 19,
        marginBottom: 22,
        marginLeft: 12,
        marginRight: 15
    },
    phoneName: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    priceContainer: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    phonePrice: {
        fontWeight: '400',
        lineHeight: 12,
        fontSize: 12
    }
});