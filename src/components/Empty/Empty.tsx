import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./EmptyStyles";

export const Empty = () => {
    return (
        <View style={[styles.content]}>
            <Text style={[styles.title]}>Oops! This place looks empty</Text>
            <Text style={[styles.subTitle]}>Refresh page or clear filter</Text>
        </View>
    );
};

