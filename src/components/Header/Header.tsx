import React from 'react';
import {Pressable, View} from "react-native";
import {styles} from "./HeaderStyles";
import {SVGMenu} from "../../svgIcons/SVGMenu";
import {SVGBin} from "../../svgIcons/SVGBin";

export const Header = () => {
    return (
        <View style={[styles.content]}>
            <Pressable>
                <SVGMenu/>
            </Pressable>
            <Pressable>
                <SVGBin colorFill='#fff'/>
            </Pressable>
        </View>
    );
};
