import React from 'react';
import {FlatList, StatusBar, View} from "react-native";
import {StackShopProps} from "../types";
import {ItemI} from "../../data/FakeData";
import {PADDING} from "../../constant/constant";
import {Empty} from "../../components/Empty/Empty";
import {renderShoppingItem} from "./ShoppingItem/ShoppingItem";
import {stylesShopCart} from "./ShoppingCartStyles";
import {Header} from "../../components/Header/Header";
import {styles} from "../Main/MainStyles";

interface PropsI extends StackShopProps {
    value: number
}

const fakeArray: ItemI[] = [{
    id: 1,
    image: require('../../../assets/phonePhoto/image1.png'),
    title: 'Apple iPhone 13 128GB Blue',
    price: 999
}, {
    id: 2,
    image: require('../../../assets/phonePhoto/image1.png'),
    title: 'Apple iPhone 13 128GB Blue',
    price: 999
}]


export const ShoppingCartScreen = ({value, route}: PropsI) => {
    return (
        <View style={[stylesShopCart.container]}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={fakeArray}
                renderItem={renderShoppingItem}
                bounces={false}
                contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                ListEmptyComponent={Empty}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={styles.header}
                stickyHeaderIndices={[0]}

            />
        </View>
    );
};

