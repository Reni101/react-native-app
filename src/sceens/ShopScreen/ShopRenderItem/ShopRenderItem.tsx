import React from 'react';
import {Image, ListRenderItem, Pressable, StyleSheet, Text, View} from "react-native";
import {ShoppingCartIcon} from "../../../svgIcons/shoppingCartIcon";
import {ItemI} from "../../../data/FakeData";
import {PADDING, WIDTH} from "../../../constant/constant";

export const ShopRenderItem: ListRenderItem<ItemI> = ({item}) => {
    return <View style={[styles.itemProps]}>
        <Image style={[styles.imageStyle]}
               resizeMode={'contain'}
               source={item.image}/>
        <View style={[styles.infoIphone]}>
            <Text style={[styles.phoneName]}>{item.title}</Text>
            <View style={[styles.priceContainer]}>
                <Text style={[styles.phonePrice]}> $ {item.price}</Text>
                <Pressable>
                    <ShoppingCartIcon/>
                </Pressable>
            </View>
        </View>
    </View>
};

export const styles = StyleSheet.create({
    itemProps: {
        backgroundColor: 'white',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 10
    },
    imageStyle: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8,
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
    },

})
