import React from 'react';
import {FlatList, StatusBar, Text, View} from "react-native";
import {ItemI} from "../../data/FakeData";
import {PADDING} from "../../constant/constant";
import {Empty} from "../../components/Empty/Empty";
import {renderShoppingItem} from "./Item/ShoppingItem";
import {stylesShopCart} from "./CartStyles";
import {Header} from "../../components/Header/Header";
import {styles} from "../ShopScreen/ShopStyles";

const fakeArray: ItemI[] = [{
    id: 1,
    image: require('../../../assets/phonePhoto/image1.png'),
    title: 'Apple iPhone 13 128GB Blue',
    price: 999
}, {
    id: 2,
    image: require('../../../assets/phonePhoto/image2.png'),
    title: 'Apple iPhone 14 Pro 128GB Space Black',
    price: 1199
}]


export const CartScreen = () => {
    return (
        <View style={[stylesShopCart.container]}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={fakeArray}
                renderItem={renderShoppingItem}
                bounces={false}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                ListEmptyComponent={Empty}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={styles.header}
                stickyHeaderIndices={[0]}
            />
            <Text>
                common:{fakeArray.reduce((sum, el) => sum + el.price, 0)}
            </Text>

        </View>
    );
};

