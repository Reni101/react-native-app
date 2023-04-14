import React, {useRef, useState} from 'react';
import {FlatList, Image, ListRenderItem, Pressable, StatusBar, Text, View} from "react-native";
import {styles} from "./ShopStyles";
import {fakeData, ItemI} from "../../data/FakeData";
import {PADDING} from "../../constant/constant";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Empty} from "../../components/Empty/Empty";
import {ShoppingCartIcon} from "../../svgIcons/shoppingCartIcon";
import {ScrollUpIcon} from "../../svgIcons/scrollUpIcon";

export const ShopScreen = () => {
    const listRef = useRef(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 300;

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
                        <ShoppingCartIcon/>
                    </Pressable>
                </View>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={fakeData}
                ref={listRef}
                onScroll={event => {
                    setContentVerticalOffset(event.nativeEvent.contentOffset.y);
                }}
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
            {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD
                && <Pressable style={[styles.scrollTopButton]}
                              onPress={() => {
//@ts-ignore
                                  listRef.current.scrollToOffset({offset: 0, animated: true});
                              }}
                >
                    <ScrollUpIcon/>
                </Pressable>}
        </View>
    );
};
