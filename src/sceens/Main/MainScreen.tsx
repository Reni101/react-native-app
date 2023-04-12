import React from 'react';
import {FlatList, Image, ListRenderItem, Pressable, StatusBar, Text, View} from "react-native";
import {styles} from "./MainStyles";
import {fakeData, ItemI} from "../../data/FakeData";
import {PADDING} from "../../constant/constant";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Empty} from "../../components/Empty/Empty";
import {SVGShoppingCart} from "../../svgIcons/SVGShoppingCart";

export const MainScreen = () => {
    const renderItem: ListRenderItem<ItemI> = ({item}) => {
        return <View style={[styles.itemProps]}>
            <Image style={[styles.imageStyle]}
                   resizeMode={'contain'}
                   source={item.image}/>
            <View style={[styles.infoIphone]}>
                <Text style={[styles.phoneName]}>{item.title}</Text>
                <View style={[styles.priceContainer]}>
                    <Text style={[styles.phonePrice]}> $ {item.price}</Text>
                    <Pressable>
                        <SVGShoppingCart/>
                    </Pressable>

                </View>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                bounces={false}
                contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={styles.header}
                stickyHeaderIndices={[0]}
                ListFooterComponent={Footer}
                ListFooterComponentStyle={styles.footer}
                ListEmptyComponent={Empty}
            />
        </View>
    );
};
