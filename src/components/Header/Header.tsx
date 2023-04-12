import React from 'react';
import {Pressable, View} from "react-native";
import {styles} from "./HeaderStyles";
import {SVGMenu} from "../../svgIcons/SVGMenu";
import {SVGShoppingCart} from "../../svgIcons/SVGShoppingCart";
import {useAppNavigation} from "../../hooks/useAppNavigation";

export const Header = () => {
    const navigation = useAppNavigation();

    return (
        <View style={[styles.content]}>
            <Pressable >
                <SVGMenu/>
            </Pressable>
            <Pressable onPress={()=>{
                navigation.navigate('Shop')
            }}>
                <SVGShoppingCart colorFill='#fff'/>
            </Pressable>
        </View>
    );
};
