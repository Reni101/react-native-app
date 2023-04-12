import React from 'react';
import {Button, StatusBar, Text, View} from "react-native";
import {useAppNavigation} from "../../hooks/useAppNavigation";
import {StackShopProps} from "../types";

interface PropsI extends StackShopProps {
    value: number
}

export const ShoppingCartScreen = ({value, route}: PropsI) => {
    console.log(JSON.stringify(route, null, 2))
    const navigation = useAppNavigation();
    return (
        <View>
            <StatusBar barStyle={'dark-content'}/>
            <Button title={'go back'} onPress={() => {
                navigation.navigate('Main')
            }}/>
            <Text> props value: {value}</Text>
        </View>
    );
};

