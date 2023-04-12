import React from 'react';
import {Pressable, View} from "react-native";
import {styles} from "./HeaderStyles";
import {SVGMenu} from "../../svgIcons/SVGMenu";
import {SVGShoppingCart} from "../../svgIcons/SVGShoppingCart";

export const Header = () => {
    return (
        <View style={[styles.content]}>
            <Pressable>
                <SVGMenu/>
            </Pressable>
            <Pressable>
                <SVGShoppingCart colorFill='#fff'/>
            </Pressable>
        </View>
    );
};
