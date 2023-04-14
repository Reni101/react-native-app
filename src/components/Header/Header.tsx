import React from 'react';
import {Pressable, View} from "react-native";
import {styles} from "./HeaderStyles";
import {MenuIcon} from "../../svgIcons/menuIcon";
import {ShoppingCartIcon} from "../../svgIcons/shoppingCartIcon";
import {useAppNavigation} from "../../hooks/useAppNavigation";

export const Header = () => {
    const navigation = useAppNavigation();

    return (
        <View style={[styles.content]}>
            <Pressable >
                <MenuIcon/>
            </Pressable>
            <Pressable onPress={()=>{
                navigation.navigate('Cart')
            }}>
                <ShoppingCartIcon colorFill='#fff'/>
            </Pressable>
        </View>
    );
};
