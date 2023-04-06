import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./FooterStyles";

export const Footer = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>© 2022 It-Incubator.io. All rights reserved</Text>
        </View>
    );
};

