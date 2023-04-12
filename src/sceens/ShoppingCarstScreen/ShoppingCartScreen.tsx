import React from 'react';
import {Button, View} from "react-native";
import {useAppNavigation} from "../../hooks/useAppNavigation";

export const ShoppingCartScreen = () => {
    const navigation = useAppNavigation();
    return (
        <View>
           <Button title={'go back'} onPress={()=>{
               navigation.navigate('Main')
           }}/>
        </View>
    );
};

