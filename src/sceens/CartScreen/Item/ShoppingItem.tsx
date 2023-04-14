import {Image, ListRenderItem, Text, View} from "react-native";
import {ItemI} from "../../../data/FakeData";
import React from "react";
import {styles} from "./ShoppingItemStyle";

export const renderShoppingItem: ListRenderItem<ItemI> = ({item}) => {
    return <View style={[styles.shopItem]}>
        <Image style={[styles.image]} source={item.image}/>
        <View style={[styles.title]}>
            <Text style={[styles.text]}>{item.title}</Text>
            <Text>{item.price}$</Text>
        </View>
        <Text style={[styles.text]}>- 1 +</Text>
    </View>
}